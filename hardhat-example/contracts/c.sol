// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract C {
    //1. Property / State variable
    // <type> <visibility modifier> <variable name>;
    string public fname="vijay"; // i am declaring property / state variable here also initializing it with value "vijay"
    string public lname; // i am declaring property / state variable here

    //2. Constructor
    constructor () {
        lname="Dabkara"; // i am initializing property / state variable here in constructor
    }
    //3. Method

}