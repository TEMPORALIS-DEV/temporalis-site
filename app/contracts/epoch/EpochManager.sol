// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IStrategyRegistry {
    enum Status { None, Proposed, Sandbox, Candidate, Active, Paused, Retired }
    struct Guardrails {
        uint16 maxWeeklyDrawdownBps;
        uint16 maxExposurePerPoolBps;
        uint16 maxExposurePerChainBps;
        uint16 minExecSuccessBps;
        uint16 gasCostCapBps;
    }
    function strategies(uint256 id) external view returns (
        uint256 _id,
        address owner,
        Status status,
        uint8 category,
        bytes32 specHash,
        string memory metadataURI,
        uint8 riskTier,
        uint64 createdAt,
        uint64 updatedAt,
        uint256 bondRequired,
        uint256 bondLocked,
        Guardrails memory guardrails
    );

    function activate(uint256 id, string calldata reason) external;
    function pause(uint256 id, string calldata reason) external;
    function retire(uint256 id, string calldata reason) external;

    function slashBond(uint256 id, uint256 amount, address to, string calldata reason) external;
}

interface IScoringEngine {
    function scoreWeekly(
        uint256 epochId,
        uint256 strategyId,
        bytes32 proofHash
    ) external returns (int256 score, bool shouldPause, bool shouldRetire, uint256 slashAmount);
}

interface IRiskEngine {
    struct RiskEngineMetrics {
        uint256 drawdownBps;
        uint256 exposurePerPoolBps;
        uint256 exposurePerChainBps;
        uint256 execSuccessBps;
        uint256 gasToProfitBps;
        bool dataIntegrityFail;
        bool protocolExploitSignal;
    }

    function postMetrics(uint256 epochId, uint256 strategyId, RiskEngineMetrics calldata m) external;

    function evaluate(uint256 epochId, uint256 strategyId)
        external
        view
        returns (bool violatedRisk, bool shouldPause, uint8 severity, string memory reason);
}

interface ISelfHealingController {
    function autoPause(uint256 epochId, uint256 strategyId, string calldata reason) external;
    function reactivate(uint256 epochId, uint256 strategyId, string calldata reason) external;
}

contract EpochManager {
    address public admin;
    IStrategyRegistry public registry;
    IScoringEngine public scoring;
    IRiskEngine public riskEngine;
    ISelfHealingController public selfHealing;

    // Epoch config (weekly)
    uint256 public epochDuration = 7 days;
    uint256 public currentEpochId;
    uint256 public epochStart;

    struct ProofRecord {
        bytes32 proofHash;
        uint64 submittedAt;
        bool scored;
        int256 score;
    }

    mapping(uint256 => mapping(uint256 => ProofRecord)) public proofs;

    event EpochOpened(uint256 indexed epochId, uint256 start, uint256 end);
    event EpochClosed(uint256 indexed epochId, uint256 end);

    event ProofSubmitted(uint256 indexed epochId, uint256 indexed strategyId, bytes32 proofHash);
    event ProofScored(uint256 indexed epochId, uint256 indexed strategyId, int256 score);

    event RiskEngineSet(address indexed riskEngine);
    event SelfHealingSet(address indexed selfHealing);

    event RiskMetricsForwarded(uint256 indexed epochId, uint256 indexed strategyId);
    event RiskDecision(uint256 indexed epochId, uint256 indexed strategyId, uint8 severity, string reason);

    event ActionPause(uint256 indexed epochId, uint256 indexed strategyId, string reason);
    event ActionRetire(uint256 indexed epochId, uint256 indexed strategyId, string reason);
    event ActionSlash(uint256 indexed epochId, uint256 indexed strategyId, uint256 amount, string reason);
    event ActionReactivate(uint256 indexed epochId, uint256 indexed strategyId, string reason);

    modifier onlyAdmin() { require(msg.sender == admin, "NOT_ADMIN"); _; }

    constructor(address _registry, address _scoring) {
        require(_registry != address(0) && _scoring != address(0), "BAD_ADDR");
        admin = msg.sender;
        registry = IStrategyRegistry(_registry);
        scoring = IScoringEngine(_scoring);
    }

    // -----------------------------
    // Wiring
    // -----------------------------

    function setRiskEngine(address re) external onlyAdmin {
        require(re != address(0), "BAD_RISK_ENGINE");
        riskEngine = IRiskEngine(re);
        emit RiskEngineSet(re);
    }

    function setSelfHealing(address sh) external onlyAdmin {
        require(sh != address(0), "BAD_SELF_HEALING");
        selfHealing = ISelfHealingController(sh);
        emit SelfHealingSet(sh);
    }

    // -----------------------------
    // Epoch control
    // -----------------------------

    function openEpoch() external onlyAdmin {
        require(epochStart == 0 || block.timestamp >= epochStart + epochDuration, "EPOCH_NOT_ENDED");
        currentEpochId += 1;
        epochStart = block.timestamp;
        emit EpochOpened(currentEpochId, epochStart, epochStart + epochDuration);
    }

    function closeEpoch() external onlyAdmin {
        require(epochStart != 0, "NO_EPOCH");
        require(block.timestamp >= epochStart + epochDuration, "EPOCH_NOT_ENDED");
        emit EpochClosed(currentEpochId, block.timestamp);
    }

    function epochEnd() public view returns (uint256) {
        if (epochStart == 0) return 0;
        return epochStart + epochDuration;
    }

    function setEpochDuration(uint256 newDuration) external onlyAdmin {
        require(newDuration >= 1 days && newDuration <= 30 days, "BAD_DURATION");
        epochDuration = newDuration;
    }

    // -----------------------------
    // Proof submission
    // -----------------------------

    function submitProof(uint256 strategyId, bytes32 proofHash) external onlyAdmin {
        require(currentEpochId > 0 && epochStart != 0, "EPOCH_NOT_OPEN");
        require(block.timestamp < epochEnd(), "EPOCH_ENDED");
        require(proofHash != bytes32(0), "EMPTY_PROOF");

        (, , IStrategyRegistry.Status status,,,,,,,,,,) = registry.strategies(strategyId);
        require(status == IStrategyRegistry.Status.Active, "NOT_ACTIVE");

        ProofRecord storage r = proofs[currentEpochId][strategyId];
        require(r.proofHash == bytes32(0), "ALREADY_SUBMITTED");

        r.proofHash = proofHash;
        r.submittedAt = uint64(block.timestamp);

        emit ProofSubmitted(currentEpochId, strategyId, proofHash);
    }

    // -----------------------------
    // Risk metrics forwarding
    // -----------------------------

    function submitRiskMetrics(uint256 strategyId, IRiskEngine.RiskEngineMetrics calldata m) external onlyAdmin {
        require(address(riskEngine) != address(0), "NO_RISK_ENGINE");
        require(currentEpochId > 0 && epochStart != 0, "EPOCH_NOT_OPEN");
        require(block.timestamp < epochEnd(), "EPOCH_ENDED");

        // forward call (msg.sender becomes EpochManager inside RiskEngine)
        riskEngine.postMetrics(currentEpochId, strategyId, m);
        emit RiskMetricsForwarded(currentEpochId, strategyId);
    }

    // -----------------------------
    // Reactivation (after cooldown)
    // -----------------------------

    function reactivateStrategy(uint256 strategyId, string calldata reason) external onlyAdmin {
        require(address(selfHealing) != address(0), "NO_SELF_HEALING");
        require(currentEpochId > 0, "NO_EPOCH");

        selfHealing.reactivate(currentEpochId, strategyId, reason);
        emit ActionReactivate(currentEpochId, strategyId, reason);
    }

    // -----------------------------
    // Scoring + enforcement
    // -----------------------------

    function scoreAndEnforce(uint256 strategyId, address slashTo) external onlyAdmin {
        require(currentEpochId > 0, "NO_EPOCH");
        ProofRecord storage r = proofs[currentEpochId][strategyId];
        require(r.proofHash != bytes32(0), "NO_PROOF");
        require(!r.scored, "ALREADY_SCORED");

        require(address(riskEngine) != address(0), "NO_RISK_ENGINE");

        // 1) Risk evaluation FIRST
        (bool violatedRisk, bool shouldPauseRisk, uint8 severity, string memory riskReason) =
            riskEngine.evaluate(currentEpochId, strategyId);

        emit RiskDecision(currentEpochId, strategyId, severity, riskReason);

        // Hard risk violation => retire + slash, skip scoring
        if (violatedRisk) {
            registry.retire(strategyId, riskReason);
            emit ActionRetire(currentEpochId, strategyId, riskReason);

            uint256 hardSlash = 1e18; // 1 VLR placeholder
            require(slashTo != address(0), "BAD_SLASH_TO");
            registry.slashBond(strategyId, hardSlash, slashTo, riskReason);
            emit ActionSlash(currentEpochId, strategyId, hardSlash, riskReason);

            r.scored = true;
            r.score = -1e18;
            emit ProofScored(currentEpochId, strategyId, r.score);
            return;
        }

        // Soft risk issue => pause via SelfHealing if configured, else direct pause
        if (shouldPauseRisk) {
            if (address(selfHealing) != address(0)) {
                selfHealing.autoPause(currentEpochId, strategyId, riskReason);
                emit ActionPause(currentEpochId, strategyId, riskReason);
            } else {
                registry.pause(strategyId, riskReason);
                emit ActionPause(currentEpochId, strategyId, riskReason);
            }
        }

        // 2) Score normally
        (int256 score, bool shouldPause, bool shouldRetire, uint256 slashAmount) =
            scoring.scoreWeekly(currentEpochId, strategyId, r.proofHash);

        r.scored = true;
        r.score = score;
        emit ProofScored(currentEpochId, strategyId, score);

        // 3) Enforcement from scoring
        if (shouldRetire) {
            registry.retire(strategyId, "GSCL_RETIRE");
            emit ActionRetire(currentEpochId, strategyId, "GSCL_RETIRE");
        } else if (shouldPause) {
            if (address(selfHealing) != address(0)) {
                selfHealing.autoPause(currentEpochId, strategyId, "GSCL_PAUSE");
                emit ActionPause(currentEpochId, strategyId, "GSCL_PAUSE");
            } else {
                registry.pause(strategyId, "GSCL_PAUSE");
                emit ActionPause(currentEpochId, strategyId, "GSCL_PAUSE");
            }
        }

        if (slashAmount > 0) {
            require(slashTo != address(0), "BAD_SLASH_TO");
            registry.slashBond(strategyId, slashAmount, slashTo, "GSCL_SLASH");
            emit ActionSlash(currentEpochId, strategyId, slashAmount, "GSCL_SLASH");
        }
    }
}
