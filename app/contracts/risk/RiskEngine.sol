// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * Velora v1 — Risk Engine
 * Evaluates weekly operational metrics against guardrails.
 *
 * v1:
 * - Metrics are posted by EpochManager/admin (simulation / alpha).
 * Future:
 * - Signed reports / oracle feeds.
 */

interface IStrategyRegistryLite {
    enum Status { None, Proposed, Sandbox, Candidate, Active, Paused, Retired }
    struct Guardrails {
        uint16 maxWeeklyDrawdownBps;   // 300 = 3%
        uint16 maxExposurePerPoolBps;  // 2000 = 20%
        uint16 maxExposurePerChainBps; // 4000 = 40%
        uint16 minExecSuccessBps;      // 9700 = 97%
        uint16 gasCostCapBps;          // 1500 = 15%
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
}

contract RiskEngine {
    address public admin;
    address public epochManager;
    IStrategyRegistryLite public registry;

    modifier onlyAdmin() { require(msg.sender == admin, "NOT_ADMIN"); _; }
    modifier onlyEpoch() { require(msg.sender == epochManager, "NOT_EPOCH"); _; }

    constructor(address _registry) {
        require(_registry != address(0), "BAD_REGISTRY");
        admin = msg.sender;
        registry = IStrategyRegistryLite(_registry);
    }

    function setEpochManager(address ep) external onlyAdmin {
        require(ep != address(0), "BAD_EPOCH");
        epochManager = ep;
    }

    // -----------------------------
    // Posted weekly metrics (v1)
    // -----------------------------

    struct PostedMetrics {
        // risk related only (not full scoring)
        uint256 drawdownBps;          // weekly max drawdown
        uint256 exposurePerPoolBps;   // max exposure in a single pool
        uint256 exposurePerChainBps;  // max exposure in a single chain
        uint256 execSuccessBps;       // success rate
        uint256 gasToProfitBps;       // gas cost ratio to profit (if profit>0)
        bool dataIntegrityFail;       // e.g. proof mismatch / invalid feed
        bool protocolExploitSignal;   // e.g. adapter flagged
    }

    // epochId => strategyId => metrics
    mapping(uint256 => mapping(uint256 => PostedMetrics)) public posted;

    event MetricsPosted(uint256 indexed epochId, uint256 indexed strategyId);
    event RiskEvaluated(
        uint256 indexed epochId,
        uint256 indexed strategyId,
        bool violatedRisk,
        bool shouldPause,
        uint8 severity,
        string reason
    );

    /// Epoch/admin posts metrics in v1 (simulation/alpha).
    function postMetrics(
        uint256 epochId,
        uint256 strategyId,
        PostedMetrics calldata m
    ) external onlyEpoch {
        // overwrite protection
        PostedMetrics storage cur = posted[epochId][strategyId];
        require(cur.execSuccessBps == 0 && cur.drawdownBps == 0 && !cur.dataIntegrityFail, "ALREADY_POSTED");

        posted[epochId][strategyId] = m;
        emit MetricsPosted(epochId, strategyId);
    }

    // -----------------------------
    // Evaluation
    // -----------------------------

    /**
     * Returns:
     * - violatedRisk: hard fail -> retire + slash recommended
     * - shouldPause: soft fail -> pause recommended
     * - severity: 0 none, 1 soft, 2 hard
     * - reason: short reason tag
     */
    function evaluate(
        uint256 epochId,
        uint256 strategyId
    )
        external
        view
        returns (bool violatedRisk, bool shouldPause, uint8 severity, string memory reason)
    {
        (, , IStrategyRegistryLite.Status status,,,,,,,,,, IStrategyRegistryLite.Guardrails memory g) =
            registry.strategies(strategyId);

        require(status == IStrategyRegistryLite.Status.Active, "NOT_ACTIVE");

        PostedMetrics memory m = posted[epochId][strategyId];

        // If not posted, treat as failure (soft -> pause)
        if (m.execSuccessBps == 0 && m.drawdownBps == 0 && !m.dataIntegrityFail) {
            return (false, true, 1, "MISSING_METRICS");
        }

        // -------- Hard failures (retire) --------
        if (m.dataIntegrityFail) {
            return (true, false, 2, "DATA_INTEGRITY_FAIL");
        }
        if (m.protocolExploitSignal) {
            return (true, false, 2, "PROTOCOL_EXPLOIT_SIGNAL");
        }

        // Exceeding max drawdown is hard fail (v1 strict)
        if (m.drawdownBps > g.maxWeeklyDrawdownBps) {
            return (true, false, 2, "DRAWDOWN_BREACH");
        }

        // Exceeding pool/chain exposure is hard fail (strict discipline)
        if (m.exposurePerPoolBps > g.maxExposurePerPoolBps) {
            return (true, false, 2, "POOL_EXPOSURE_BREACH");
        }
        if (m.exposurePerChainBps > g.maxExposurePerChainBps) {
            return (true, false, 2, "CHAIN_EXPOSURE_BREACH");
        }

        // -------- Soft failures (pause) --------
        if (m.execSuccessBps < g.minExecSuccessBps) {
            return (false, true, 1, "LOW_EXEC_SUCCESS");
        }

        // Gas-to-profit cap: if too high -> pause (soft) (v1)
        if (m.gasToProfitBps > g.gasCostCapBps) {
            return (false, true, 1, "GAS_CAP_BREACH");
        }

        // No issues
        return (false, false, 0, "OK");
    }
}
