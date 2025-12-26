// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ArcSwap {
    string public name = "Arc Swap Testnet";
    
    function checkStatus() public pure returns (string memory) {
        return "Swap Contract is Live on Arc!";
    }
}
