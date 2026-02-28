// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * Velora / Temporalis — Scoring Engine (GSCL)
 * v1: deterministic scoring called by EpochManager
 *
 * Adds:
 * - StrategyScored event for on-chain drilldown
 * - LastResult storage for UI dashboards
 */

contract ScoringEngine {
    address public admin;
    address public epochManager;

    modifier onlyAdmin() {
        require(msg.sender == admin, "NOT_ADMIN");
        _;
    }

    modifier onlyEpoch() {
        require(msg.sender == epochManager, "NOT_EPOCH");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function setEpochManager(address ep) external onlyAdmin {
        require(ep != address(0), "BAD_EPOCH");
        epochManager = ep;
    }

    // -----------------------------
    // Strategy Lifetime Tracking
    // -----------------------------

    struct Lifetime {
        uint256 survivedEpochs;
        uint256 lastEpoch;
        bool retired;
    }

    mapping(uint256 => Lifetime) public lifetime; // strategyId => lifetime

    // -----------------------------
    // Weekly Metrics (provided offchain)
    // -----------------------------

    struct WeeklyMetrics {
        int256 netYield;          // after costs (signed)
        uint256 drawdownBps;      // weekly max DD
        uint256 execSuccessBps;   // execution success rate
        bool violatedRisk;        // hard risk violation
    }

    // -----------------------------
    // Result Storage (for UI)
    // -----------------------------

    struct LastResult {
        uint256 epochId;
        int256 score;
        bool shouldPause;
        bool shouldRetire;
        uint256 slashAmount;
        uint256 smiStreak;
        uint256 drawdownBps;
        uint256 execSuccessBps;
        bool violatedRisk;
        uint256 updatedAt;
    }

    mapping(uint256 => LastResult) public lastResult; // strategyId => last result

    // -----------------------------
    // Events (for drilldown / analytics)
    // -----------------------------

    event EpochManagerSet(address indexed epochManager);

    event StrategyScored(
        uint256 indexed epochId,
        uint256 indexed strategyId,
        int256 score,
        bool shouldPause,
        bool shouldRetire,
        uint256 slashAmount,
        uint256 smiStreak,
        uint256 drawdownBps,
        uint256 execSuccessBps,
        bool violatedRisk,
        bytes32 proofHash
    );

    // Optional: if you want to audit metrics input later
    event MetricsEvaluated(
        uint256 indexed epochId,
        uint256 indexed strategyId,
        int256 netYield,
        uint256 drawdownBps,
        uint256 execSuccessBps,
        bool violatedRisk
    );

    // -----------------------------
    // Core Scoring
    // -----------------------------

    function scoreWeekly(
        uint256 epochId,
        uint256 strategyId,
        bytes32 proofHash
    )
        external
        onlyEpoch
        returns (
            int256 score,
            bool shouldPause,
            bool shouldRetire,
            uint256 slashAmount
        )
    {
        WeeklyMetrics memory m = _fetchMetrics(epochId, strategyId);

        emit MetricsEvaluated(
            epochId,
            strategyId,
            m.netYield,
            m.drawdownBps,
            m.execSuccessBps,
            m.violatedRisk
        );

        Lifetime storage life = lifetime[strategyId];

        // -------- Retirement rules --------
        if (m.violatedRisk) {
            shouldRetire = true;
            slashAmount = _baseSlash();
            life.retired = true;

            // store + emit
            _storeAndEmit(
                epochId,
                strategyId,
                -1e18,
                false,
                true,
                slashAmount,
                life.survivedEpochs,
                m,
                proofHash
            );

            return (-1e18, false, true, slashAmount);
        }

        // -------- Base score --------
        score = m.netYield;

        // -------- Risk penalty --------
        if (m.drawdownBps > 300) {
            score -= int256(uint256(m.drawdownBps - 300)) * 1e14;
        }

        // -------- Reliability --------
        if (m.execSuccessBps < 9700) {
            score -= 5e16;
            shouldPause = true;
        } else {
            score += 2e16;
        }

        // -------- SMI (Strategy Mortality Index) --------
        if (life.lastEpoch + 1 == epochId) {
            life.survivedEpochs += 1;
        } else {
            life.survivedEpochs = 1;
        }
        life.lastEpoch = epochId;

        uint256 smiBonus = life.survivedEpochs * 1e15;
        score += int256(smiBonus);

        // -------- Soft pause rule --------
        if (score < 0) {
            shouldPause = true;
        }

        slashAmount = 0;

        // store + emit
        _storeAndEmit(
            epochId,
            strategyId,
            score,
            shouldPause,
            shouldRetire,
            slashAmount,
            life.survivedEpochs,
            m,
            proofHash
        );

        return (score, shouldPause, shouldRetire, slashAmount);
    }

    function _storeAndEmit(
        uint256 epochId,
        uint256 strategyId,
        int256 score,
        bool shouldPause,
        bool shouldRetire,
        uint256 slashAmount,
        uint256 smiStreak,
        WeeklyMetrics memory m,
        bytes32 proofHash
    ) internal {
        lastResult[strategyId] = LastResult({
            epochId: epochId,
            score: score,
            shouldPause: shouldPause,
            shouldRetire: shouldRetire,
            slashAmount: slashAmount,
            smiStreak: smiStreak,
            drawdownBps: m.drawdownBps,
            execSuccessBps: m.execSuccessBps,
            violatedRisk: m.violatedRisk,
            updatedAt: block.timestamp
        });

        emit StrategyScored(
            epochId,
            strategyId,
            score,
            shouldPause,
            shouldRetire,
            slashAmount,
            smiStreak,
            m.drawdownBps,
            m.execSuccessBps,
            m.violatedRisk,
            proofHash
        );
    }

    // -----------------------------
    // Admin helpers
    // -----------------------------

    function setEpochManagerAndEmit(address ep) external onlyAdmin {
        require(ep != address(0), "BAD_EPOCH");
        epochManager = ep;
        emit EpochManagerSet(ep);
    }

    // -----------------------------
    // Internal helpers
    // -----------------------------

    function _fetchMetrics(
        uint256 /*epochId*/,
        uint256 /*strategyId*/
    ) internal pure returns (WeeklyMetrics memory) {
        // v1 stub (offchain evaluation)
        return WeeklyMetrics({
            netYield: int256(1e17),
            drawdownBps: 120,
            execSuccessBps: 9850,
            violatedRisk: false
        });
    }

    function _baseSlash() internal pure returns (uint256) {
        return 1e18;
    }
}