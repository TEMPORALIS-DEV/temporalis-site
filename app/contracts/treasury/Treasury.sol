// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address who) external view returns (uint256);
}

interface IStrategyRegistryOwners {
    function strategies(uint256 id) external view returns (
        uint256 _id,
        address owner,
        uint8 status,
        uint8 category,
        bytes32 specHash,
        string memory metadataURI,
        uint8 riskTier,
        uint64 createdAt,
        uint64 updatedAt,
        uint256 bondRequired,
        uint256 bondLocked,
        bytes memory guardrails // ignored here (packed in ABI if different)
    );
}

/**
 * Velora v1 — Treasury
 * - Holds VLR
 * - Receives funding (rewards pool)
 * - Distributes weekly rewards via EpochManager
 *
 * v1:
 * - direct distribution (admin/epoch orchestrated)
 * Future:
 * - merkle claims, streaming, fee routing, insurance buckets.
 */
contract Treasury {
    address public admin;
    address public epochManager;

    IERC20 public immutable vlr;

    // Split ratios (bps)
    uint16 public reserveBps = 2000;  // 20% kept as reserve
    uint16 public burnBps = 0;        // 0% burn by default (optional)
    uint16 public rewardsBps = 8000;  // 80% rewards by default

    address public burnAddress = address(0x000000000000000000000000000000000000dEaD);

    modifier onlyAdmin() { require(msg.sender == admin, "NOT_ADMIN"); _; }
    modifier onlyEpoch() { require(msg.sender == epochManager, "NOT_EPOCH"); _; }

    event EpochManagerSet(address indexed ep);
    event Funded(address indexed from, uint256 amount);
    event RatiosUpdated(uint16 reserveBps, uint16 burnBps, uint16 rewardsBps);
    event BurnAddressUpdated(address indexed burnAddr);

    event RewardsDistributed(uint256 indexed epochId, uint256 total, uint256 winners);
    event Paid(uint256 indexed epochId, address indexed to, uint256 amount);

    constructor(address _vlr) {
        require(_vlr != address(0), "BAD_VLR");
        admin = msg.sender;
        vlr = IERC20(_vlr);
    }

    function setEpochManager(address ep) external onlyAdmin {
        require(ep != address(0), "BAD_EPOCH");
        epochManager = ep;
        emit EpochManagerSet(ep);
    }

    function setRatios(uint16 _reserveBps, uint16 _burnBps, uint16 _rewardsBps) external onlyAdmin {
        require(uint256(_reserveBps) + uint256(_burnBps) + uint256(_rewardsBps) == 10000, "BPS_NOT_10000");
        reserveBps = _reserveBps;
        burnBps = _burnBps;
        rewardsBps = _rewardsBps;
        emit RatiosUpdated(_reserveBps, _burnBps, _rewardsBps);
    }

    function setBurnAddress(address burnAddr) external onlyAdmin {
        require(burnAddr != address(0), "BAD_BURN");
        burnAddress = burnAddr;
        emit BurnAddressUpdated(burnAddr);
    }

    /// Anyone can fund rewards pool (team, partners, fees router later).
    function fund(uint256 amount) external {
        require(amount > 0, "AMOUNT_ZERO");
        require(vlr.transferFrom(msg.sender, address(this), amount), "TRANSFER_FROM_FAIL");
        emit Funded(msg.sender, amount);
    }

    /**
     * Distribute rewards for an epoch.
     * v1: EpochManager provides winners[] and weights[].
     *
     * - winners: addresses to pay
     * - weights: relative weights (sum > 0)
     *
     * Security: only EpochManager can call.
     */
    function distribute(
        uint256 epochId,
        address[] calldata winners,
        uint256[] calldata weights
    ) external onlyEpoch {
        require(winners.length == weights.length, "LEN_MISMATCH");
        require(winners.length > 0, "NO_WINNERS");

        uint256 bal = vlr.balanceOf(address(this));
        require(bal > 0, "EMPTY_TREASURY");

        // compute total weights
        uint256 wsum = 0;
        for (uint256 i = 0; i < weights.length; i++) {
            wsum += weights[i];
        }
        require(wsum > 0, "ZERO_WEIGHT_SUM");

        // calculate distributable for this call (rewards portion only)
        uint256 totalRewards = (bal * rewardsBps) / 10000;

        // optional burn from rewards portion (if enabled)
        if (burnBps > 0) {
            uint256 burnAmt = (bal * burnBps) / 10000;
            if (burnAmt > 0) {
                require(vlr.transfer(burnAddress, burnAmt), "BURN_FAIL");
            }
        }

        // reserve remains in treasury automatically

        // pay winners proportionally
        for (uint256 i = 0; i < winners.length; i++) {
            address to = winners[i];
            require(to != address(0), "BAD_WINNER");
            uint256 amt = (totalRewards * weights[i]) / wsum;
            if (amt > 0) {
                require(vlr.transfer(to, amt), "PAY_FAIL");
                emit Paid(epochId, to, amt);
            }
        }

        emit RewardsDistributed(epochId, totalRewards, winners.length);
    }
}
