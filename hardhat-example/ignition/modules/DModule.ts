import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";




let x = buildModule("DModule", (m) => {
    // m.contract("D",["constructorParams construcorParams ..."]); // the first argument "D" is the name of the contract, the second is ["a b"] constructor parameters
    let d = m.contract("D",["vijay"]);
    // every function may return something
    return { d }; // { Property:value } the property is the name of the contract, the value is the contract instance
});

export default x;