// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ModifierTest {
    // 1. property / state variable
    // type visibility name;
    uint public x; // when i declare a public variable automatically a getter function is created for that variable, so we can access the value of x from outside the contract.
    address public owner; 
    // 4. event
    // 5. modifier (use modifier to check condition before executing function, 
    //              its like middleware in express js)
    modifier onlyOwner(){
        // we also use if else statement here to check if the person who calls the function is the owner of the contract, 
        // if not we will revert the transaction and give an error message "Not Owner!"
        // if (msg.sender != owner) {
        //     revert("Not Owner!");
        // } else {
        //     _; // <- function setValueX() will be executed after this line
        // }
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