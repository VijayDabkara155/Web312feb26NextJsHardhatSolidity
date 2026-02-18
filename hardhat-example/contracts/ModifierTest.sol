// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ModifierTest {
    // 1. property / state variable
    // type visibility name;
    uint public x;
    address public owner; 
    // 4. event
    // 5. modifier (use modifier to check condition before executing function, 
    //              its like middleware in express js)
    modifier onlyOwner(){
        require (msg.sender == owner, "Not Owner!"); // check if the person who calls the function is the owner of the contract
        _; // <- function setValueX() will be executed after this line
    }
    // 2. constructor
    constructor() {
        x = 10;
        owner = msg.sender; // msg.sender is the address of the person who deploys the contract
    }

    // 3. method
    function setValueX(uint _num) public onlyOwner{
        x = _num;

    }

    
}