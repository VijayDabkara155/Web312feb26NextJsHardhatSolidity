// import {} from 'somelibrary/somelocation';
import assert from "node:assert/strict";
import { network } from "hardhat";
import { before, describe, it } from "node:test";

/* describe is a function provided by node's test module, it is used to group related tests together. 
It takes two arguments: a string that describes the group of tests, and a callback function that 
contains the actual test cases. In this case, we are using describe to create a test suite for 
understanding modifiers and test files in the context of smart contract development with Hardhat. */
describe("Let's understand modifiers and test file",async () => {
    /*network is a javascript object provided by hardhat, 
    it is used to interact with the blockchain network.*/
    // This is an example of object destructuring, 
    // we are getting the viem property from the network object.
    const { viem } = await network.connect();

    /* before is a function that used before the it functions */
    /* we have before and beforeEach functions, 
    both are used to run some code before the tests are executed.*/
    before(()=>{
        console.log("This is before function, it runs before all the tests in this describe block");
    });

    /*it is also a function provided by node's test module, 
    it is used to define an individual test case.*/
    // Test 1
    it("Should set deployer address as owner",async ()=>{
        // This is a example of array destructuring, 
        // we are getting the wallet clients from the viem object.
        const [ deployer ] = await viem.getWalletClients();
        console.log("Deployer address:", deployer);
        const myContract = await viem.deployContract("ModifierTest");
        console.log("Contract deployed at:", myContract);
        const myAddr = await myContract.address;
        console.log("Contract address:", myAddr);
        console.log("This is test 1 and it is completed");

        const owner = await myContract.read.owner();
        console.log("Owner of the contract:", owner);
        const x = deployer.account.address;
        console.log("Deployer address:", x);
        assert(owner === x, "Owner should be the deployer address");
    });
    // Test 2
    it("owner should be able to set the value of x", async ()=>{
        const contract = await viem.deployContract("ModifierTest");
        // console.log("contract >>>",contract);
        // console.log("contract.write.setValueX >>>",contract.write.setValueX);
        await contract.write.setValueX([55n]); // here n is represent bigint in javascript, because solidity uint is a big number and we need to use bigint in javascript to represent it.
        // bigint is launched in javascript in 2020 and it is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number that can be represented with the Number type in JavaScript.
        let value = await contract.read.x();
        console.log("Value of x after setting it to 55:", value);
        assert(value === 55n, "Value of x should be 55");
    });
    // Test 3
    it("Non owner should not be able to update the value of x",async ()=>{
        // getWalletClients() is a function provided by viem, it is used to get the wallet clients that are connected to the network. it is used to get the deployer and attacker accounts.
        const [ , attacker ] = await viem.getWalletClients(); // here we are using array destructuring to get the second wallet client which is the attacker
        console.log("Attacker >>>", attacker);
        let contract = await viem.deployContract("ModifierTest");
        try {
            await contract.write.setValueX([12n],{
                account: attacker.account // here we are trying to set the value of x using the attacker account, which should fail because of the onlyOwner modifier in the contract.
            });
            assert.fail("Non owner should not be able to set the value of x"); // if the above line does not throw an error, then we will fail the test because non owner should not be able to set the value of x.
        } catch (error) {

        }
    });
});