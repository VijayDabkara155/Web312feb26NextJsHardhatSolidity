// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract B {
    //1. Property / State variables
    // type accessmodifier variable_name
    string public name; // I'm declaring a property / state variables here

    //2. Constructor
    constructor(string memory n) { //_n is a formal argument
        // constructor code
        name = n; // I'm initializing the state variable here using the constructor argument
    }

    //3. Methods
}