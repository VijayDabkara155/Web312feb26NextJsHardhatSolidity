// something is imported from somewhere
// NodeJs
//A. Named import / export
//B. Default import / export
// import { NamedImport } from "somelibrary/ some location";
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



// Function invoking / calling
// Functioncall(aa1,aa2,aa3,....);
// Functioncall("string",callbackfunction);
let x = buildModule("CModule",(fa) => {
    const c = fa.contract("C");
    // Every Function may return something
    // i am returning a javascript object
    return { "c" : c };
});

// can i export anything from this file ? yes, we can export anything from this file
export default x;