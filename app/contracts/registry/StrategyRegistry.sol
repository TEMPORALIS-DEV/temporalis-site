// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * Velora v1 — Strategy Registry
 * - Registers strategies (metadata + spec hash)
 * - Enforces bonding requirement (via BondManager)
 * - Tracks lifecycle states and guardrails
 *
 * NOTE:
 * - Scoring/Epoch logic is intentionally external (EpochManager).
 * - This contract is the source of truth for strategy status + parameters.
 */

interface IBondManager {
    function lockBond(address owner, uint256 amount) external;
    function unlockBond(address owner, uint256 amount) external;
    function slashBond(address owner, uint256 amount, address to) external;
    function bondedBalance(address owner) external view returns (uint256);
}

contract StrategyRegistry {
    // -----------------------------
    // Types
    // -----------------------------

    enum Status {
        None,
        Proposed,
        Sandbox,
        Candidate,
        Active,
        Paused,
        Retired
    }

    enum Category {
        Liquidity,
        Arbitrage,
        OracleOps,
        Other
    }

    struct Guardrails {
        // v1 defaults (can be tuned later per tier)
        uint16 maxWeeklyDrawdownBps;     // e.g. 300 = 3.00%
        uint16 maxExposurePerPoolBps;    // e.g. 2000 = 20.00%
        uint16 maxExposurePerChainBps;   // e.g. 4000 = 40.00%
        uint16 minExecSuccessBps;        // e.g. 9700 = 97.00%
        uint16 gasCostCapBps;            // e.g. 1500 = 15.00% of profits
    }

    struct Strategy {
        uint256 id;
        address owner;                  // Strategy Author
        Status status;
        Category category;

        // Spec references
        bytes32 specHash;               // hash of strategy spec (offchain doc/json)
        string  metadataURI;            // IPFS/HTTPS pointer

        // Operational settings
        uint8 riskTier;                 // 0-3
        uint64 createdAt;
        uint64 updatedAt;

        // Bonds
        uint256 bondRequired;           // how much must be locked
        uint256 bondLocked;             // cached view (optional; source of truth in BondManager)

        // Guardrails
        Guardrails guardrails;
    }

    // -----------------------------
    // Storage
    // -----------------------------

    address public admin;
    IBondManager public bondManager;

    uint256 public nextId = 1;

    mapping(uint256 => Strategy) public strategies;
    mapping(address => uint256[]) public byOwner;

    // Authorized callers for state transitions (EpochManager later)
    mapping(address => bool) public operators;

    // -----------------------------
    // Events
    // -----------------------------

    event OperatorSet(address indexed op, bool allowed);

    event StrategyProposed(
        uint256 indexed id,
        address indexed owner,
        Category category,
        uint8 riskTier,
        bytes32 specHash,
        string metadataURI,
        uint256 bondRequired
    );

    event StrategyStatusChanged(uint256 indexed id, Status from, Status to, string reason);
    event StrategySpecUpdated(uint256 indexed id, bytes32 newSpecHash, string newMetadataURI);

    event BondLocked(uint256 indexed id, address indexed owner, uint256 amount);
    event BondUnlocked(uint256 indexed id, address indexed owner, uint256 amount);
    event BondSlashed(uint256 indexed id, address indexed owner, uint256 amount, address to, string reason);

    event GuardrailsUpdated(uint256 indexed id, Guardrails g);

    // -----------------------------
    // Modifiers
    // -----------------------------

    modifier onlyAdmin() {
        require(msg.sender == admin, "NOT_ADMIN");
        _;
    }

    modifier onlyOwner(uint256 id) {
        require(strategies[id].owner == msg.sender, "NOT_OWNER");
        _;
    }

    modifier onlyOperator() {
        require(operators[msg.sender], "NOT_OPERATOR");
        _;
    }

    modifier exists(uint256 id) {
        require(strategies[id].status != Status.None, "NOT_FOUND");
        _;
    }

    constructor(address _bondManager) {
        require(_bondManager != address(0), "BAD_BOND_MANAGER");
        admin = msg.sender;
        bondManager = IBondManager(_bondManager);
    }

    // -----------------------------
    // Admin
    // -----------------------------

    function setOperator(address op, bool allowed) external onlyAdmin {
        operators[op] = allowed;
        emit OperatorSet(op, allowed);
    }

    // -----------------------------
    // Propose / Update
    // -----------------------------

    function proposeStrategy(
        Category category,
        uint8 riskTier,
        bytes32 specHash,
        string calldata metadataURI,
        uint256 bondRequired
    ) external returns (uint256 id) {
        require(specHash != bytes32(0), "EMPTY_SPEC_HASH");
        require(bytes(metadataURI).length > 0, "EMPTY_URI");
        require(riskTier <= 3, "BAD_TIER");
        require(bondRequired > 0, "BOND_REQUIRED");

        id = nextId++;
        Strategy storage s = strategies[id];

        s.id = id;
        s.owner = msg.sender;
        s.status = Status.Proposed;
        s.category = category;
        s.riskTier = riskTier;
        s.specHash = specHash;
        s.metadataURI = metadataURI;
        s.createdAt = uint64(block.timestamp);
        s.updatedAt = uint64(block.timestamp);
        s.bondRequired = bondRequired;

        // Default guardrails v1
        s.guardrails = Guardrails({
            maxWeeklyDrawdownBps: 300,   // 3%
            maxExposurePerPoolBps: 2000, // 20%
            maxExposurePerChainBps: 4000,// 40%
            minExecSuccessBps: 9700,     // 97%
            gasCostCapBps: 1500          // 15%
        });

        byOwner[msg.sender].push(id);

        emit StrategyProposed(
            id, msg.sender, category, riskTier, specHash, metadataURI, bondRequired
        );
    }

    function updateStrategySpec(
        uint256 id,
        bytes32 newSpecHash,
        string calldata newMetadataURI
    ) external exists(id) onlyOwner(id) {
        Strategy storage s = strategies[id];
        require(s.status == Status.Proposed || s.status == Status.Sandbox, "LOCKED_STATUS");
        require(newSpecHash != bytes32(0), "EMPTY_SPEC_HASH");
        require(bytes(newMetadataURI).length > 0, "EMPTY_URI");

        s.specHash = newSpecHash;
        s.metadataURI = newMetadataURI;
        s.updatedAt = uint64(block.timestamp);

        emit StrategySpecUpdated(id, newSpecHash, newMetadataURI);
    }

    function updateGuardrails(uint256 id, Guardrails calldata g)
        external
        exists(id)
        onlyOwner(id)
    {
        Strategy storage s = strategies[id];
        require(s.status == Status.Proposed || s.status == Status.Sandbox, "LOCKED_STATUS");

        // Basic sanity checks
        require(g.maxWeeklyDrawdownBps > 0 && g.maxWeeklyDrawdownBps <= 2000, "BAD_DD"); // <=20%
        require(g.maxExposurePerPoolBps > 0 && g.maxExposurePerPoolBps <= 10000, "BAD_POOL");
        require(g.maxExposurePerChainBps > 0 && g.maxExposurePerChainBps <= 10000, "BAD_CHAIN");
        require(g.minExecSuccessBps >= 5000 && g.minExecSuccessBps <= 10000, "BAD_SUCCESS");
        require(g.gasCostCapBps <= 10000, "BAD_GAS_CAP");

        s.guardrails = g;
        s.updatedAt = uint64(block.timestamp);

        emit GuardrailsUpdated(id, g);
    }

    // -----------------------------
    // Bonding
    // -----------------------------

    function lockBondForStrategy(uint256 id) external exists(id) onlyOwner(id) {
        Strategy storage s = strategies[id];
        require(s.status == Status.Proposed || s.status == Status.Sandbox, "BAD_STATUS");
        require(s.bondLocked < s.bondRequired, "ALREADY_LOCKED");

        uint256 need = s.bondRequired - s.bondLocked;
        bondManager.lockBond(msg.sender, need);

        s.bondLocked += need;
        s.updatedAt = uint64(block.timestamp);

        emit BondLocked(id, msg.sender, need);
    }

    function unlockBondFromStrategy(uint256 id) external exists(id) onlyOwner(id) {
        Strategy storage s = strategies[id];

        // You can only unlock when retired (or proposed and cancelled later).
        require(s.status == Status.Retired, "NOT_RETIRED");
        require(s.bondLocked > 0, "NO_BOND");

        uint256 amt = s.bondLocked;
        s.bondLocked = 0;
        s.updatedAt = uint64(block.timestamp);

        bondManager.unlockBond(msg.sender, amt);
        emit BondUnlocked(id, msg.sender, amt);
    }

    /// Operator/Epoch can slash bond for violations.
    function slashBond(
        uint256 id,
        uint256 amount,
        address to,
        string calldata reason
    ) external exists(id) onlyOperator {
        Strategy storage s = strategies[id];
        require(amount > 0, "AMOUNT_ZERO");
        require(to != address(0), "BAD_TO");

        // cap at locked bond
        if (amount > s.bondLocked) amount = s.bondLocked;
        require(amount > 0, "INSUFFICIENT_BOND");

        s.bondLocked -= amount;
        s.updatedAt = uint64(block.timestamp);

        bondManager.slashBond(s.owner, amount, to);
        emit BondSlashed(id, s.owner, amount, to, reason);
    }

    // -----------------------------
    // Lifecycle (controlled by Operator/Epoch)
    // -----------------------------

    function moveToSandbox(uint256 id, string calldata reason) external exists(id) onlyOperator {
        _setStatus(id, Status.Sandbox, reason, true);
    }

    function moveToCandidate(uint256 id, string calldata reason) external exists(id) onlyOperator {
        _setStatus(id, Status.Candidate, reason, true);
    }

    function activate(uint256 id, string calldata reason) external exists(id) onlyOperator {
        _setStatus(id, Status.Active, reason, true);
    }

    function pause(uint256 id, string calldata reason) external exists(id) onlyOperator {
        _setStatus(id, Status.Paused, reason, false);
    }

    function retire(uint256 id, string calldata reason) external exists(id) onlyOperator {
        _setStatus(id, Status.Retired, reason, false);
    }

    function _setStatus(
        uint256 id,
        Status to,
        string calldata reason,
        bool requireBondLocked
    ) internal {
        Strategy storage s = strategies[id];
        Status from = s.status;

        require(from != Status.None, "NOT_FOUND");
        require(from != Status.Retired, "ALREADY_RETIRED");

        if (requireBondLocked) {
            require(s.bondLocked >= s.bondRequired, "BOND_NOT_LOCKED");
        }

        // Basic allowed transitions
        if (to == Status.Sandbox) {
            require(from == Status.Proposed, "BAD_TRANSITION");
        } else if (to == Status.Candidate) {
            require(from == Status.Sandbox, "BAD_TRANSITION");
        } else if (to == Status.Active) {
            require(from == Status.Candidate || from == Status.Paused, "BAD_TRANSITION");
        } else if (to == Status.Paused) {
            require(from == Status.Active, "BAD_TRANSITION");
        } else if (to == Status.Retired) {
            require(from != Status.None, "BAD_TRANSITION");
        } else {
            revert("BAD_TO");
        }

        s.status = to;
        s.updatedAt = uint64(block.timestamp);

        emit StrategyStatusChanged(id, from, to, reason);
    }

    // -----------------------------
    // Views
    // -----------------------------

    function strategiesOf(address owner) external view returns (uint256[] memory) {
        return byOwner[owner];
    }
}
