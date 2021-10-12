// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Conocidos is ERC20 {
    constructor(uint256 _supply) ERC20("Conocidos Token", "CNC") {
      _mint(msg.sender, _supply * (10**18));
    }
}