// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract D {
    //4. Events
    //4.1 Event Defined Here
    event CounterInit(uint256 counter); // Event Definition
    // Property / State variable
    // Type VisiblityModifier Name;
    string public name; // Property Declaration
    string public surname; // Property Declaration
    uint256 public counter; // Property Declaration
    // Constructor
    constructor(string memory _name) { // constructor (Type VisiblityModifier _VariableName (if variable start with _ that means the variable is temporary variable and it is used only inside the constructor))
        // constructor is a special function 
        // that is executed only once when the contract is deployed on blockchain network
        // constructor are used to initialize the property
        // name = "vijay"; // Property Initialization
        name = _name; // Property Initialization using constructor parameter
    }

    // Method
    function initCounter() public {
        //4.2 Event call / Emit Here
        counter = 0; // Property Initialization
        emit CounterInit(counter); // Event Emit
    }
}   