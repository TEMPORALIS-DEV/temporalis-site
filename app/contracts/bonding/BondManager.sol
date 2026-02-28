// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

contract BondManager {
    address public admin;
    address public registry;     // StrategyRegistry as authorized caller
    IERC20 public token;         // Bond token (VLR or separate)

    mapping(address => uint256) public bonded;

    modifier onlyAdmin() { require(msg.sender == admin, "NOT_ADMIN"); _; }
    modifier onlyRegistry() { require(msg.sender == registry, "NOT_REGISTRY"); _; }

    constructor(address _token) {
        require(_token != address(0), "BAD_TOKEN");
        admin = msg.sender;
        token = IERC20(_token);
    }

    function setRegistry(address _registry) external onlyAdmin {
        require(_registry != address(0), "BAD_REGISTRY");
        registry = _registry;
    }

    function bondedBalance(address owner) external view returns (uint256) {
        return bonded[owner];
    }

    function lockBond(address owner, uint256 amount) external onlyRegistry {
        require(amount > 0, "AMOUNT_ZERO");
        // pull tokens from owner -> this
        require(token.transferFrom(owner, address(this), amount), "TRANSFER_FROM_FAIL");
        bonded[owner] += amount;
    }

    function unlockBond(address owner, uint256 amount) external onlyRegistry {
        require(amount > 0, "AMOUNT_ZERO");
        require(bonded[owner] >= amount, "INSUFFICIENT_BOND");
        bonded[owner] -= amount;
        require(token.transfer(owner, amount), "TRANSFER_FAIL");
    }

    function slashBond(address owner, uint256 amount, address to) external onlyRegistry {
        require(amount > 0, "AMOUNT_ZERO");
        require(to != address(0), "BAD_TO");
        require(bonded[owner] >= amount, "INSUFFICIENT_BOND");

        bonded[owner] -= amount;
        require(token.transfer(to, amount), "TRANSFER_FAIL");
    }
}
