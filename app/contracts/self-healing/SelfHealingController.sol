// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IStrategyRegistryControl {
    function activate(uint256 id, string calldata reason) external;
    function pause(uint256 id, string calldata reason) external;
}

contract SelfHealingController {
    address public admin;
    address public epochManager;
    IStrategyRegistryControl public registry;

    // Cooldown defaults
    uint256 public defaultCooldown = 3 days; // v1: 3 days cooldown after pause

    struct HealingState {
        uint64 lastPausedAt;
        uint64 cooldownEndsAt;
        uint16 pauseCount;     // counts pauses (can be used for escalation)
    }

    mapping(uint256 => HealingState) public state; // strategyId => state

    event EpochManagerSet(address indexed ep);
    event CooldownUpdated(uint256 cooldownSeconds);

    event AutoPaused(uint256 indexed epochId, uint256 indexed strategyId, uint64 cooldownEndsAt, string reason);
    event Reactivated(uint256 indexed epochId, uint256 indexed strategyId, string reason);

    modifier onlyAdmin() { require(msg.sender == admin, "NOT_ADMIN"); _; }
    modifier onlyEpoch() { require(msg.sender == epochManager, "NOT_EPOCH"); _; }

    constructor(address _registry) {
        require(_registry != address(0), "BAD_REGISTRY");
        admin = msg.sender;
        registry = IStrategyRegistryControl(_registry);
    }

    function setEpochManager(address ep) external onlyAdmin {
        require(ep != address(0), "BAD_EPOCH");
        epochManager = ep;
        emit EpochManagerSet(ep);
    }

    function setDefaultCooldown(uint256 seconds_) external onlyAdmin {
        require(seconds_ >= 1 hours && seconds_ <= 30 days, "BAD_COOLDOWN");
        defaultCooldown = seconds_;
        emit CooldownUpdated(seconds_);
    }

    // -----------------------------
    // Self-healing actions
    // -----------------------------

    /// Called by EpochManager when risk/score indicates pause is needed.
    function autoPause(uint256 epochId, uint256 strategyId, string calldata reason) external onlyEpoch {
        HealingState storage hs = state[strategyId];

        hs.lastPausedAt = uint64(block.timestamp);
        hs.pauseCount += 1;

        // escalate cooldown with pauseCount (simple)
        uint256 cd = defaultCooldown;
        if (hs.pauseCount >= 3) cd = defaultCooldown * 2;   // after 3 pauses => longer cooldown
        if (hs.pauseCount >= 6) cd = defaultCooldown * 3;   // after 6 pauses => even longer

        uint64 ends = uint64(block.timestamp + cd);
        hs.cooldownEndsAt = ends;

        registry.pause(strategyId, reason);

        emit AutoPaused(epochId, strategyId, ends, reason);
    }

    /// Called by EpochManager/admin flow to reactivate if cooldown is over.
    function reactivate(uint256 epochId, uint256 strategyId, string calldata reason) external onlyEpoch {
        HealingState memory hs = state[strategyId];
        require(hs.cooldownEndsAt == 0 || block.timestamp >= hs.cooldownEndsAt, "COOLDOWN_ACTIVE");

        registry.activate(strategyId, reason);
        emit Reactivated(epochId, strategyId, reason);
    }

    /// Optional: reset pauseCount on long stable operation (can be called by epoch in v1 manually)
    function resetPauseCount(uint256 strategyId) external onlyAdmin {
        state[strategyId].pauseCount = 0;
    }
}
