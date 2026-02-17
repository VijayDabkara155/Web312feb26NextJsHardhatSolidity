// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract EventTest { // Pascal Case
    // 1. Property / State Variable

    // 4. Event
    // Event name should be in Pascal Case
    // Event name should be in the form of past tense, e.g., Sent, Received, Approved, etc.
    // Payment Event, Transfer Event, Approval Event, etc.
    // from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"
    // message = Hello, Good Morning...
    event MessageSent(address indexed from, string message);

    // 2. Constructor

    // 3. Method
    // function functionName(datatype _formalargument) external { // function name should be in camelCase
    //     // code
    // }
    function sendMessage(string calldata _msg) external {
        emit MessageSent(msg.sender, _msg);
    }
}