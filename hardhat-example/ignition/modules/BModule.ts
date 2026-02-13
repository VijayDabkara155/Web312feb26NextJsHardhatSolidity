import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("BModule", (m) => {
  const b = m.contract("B",["Vijay"]); // we can pass contract params here as well, but we will keep it simple for now
  return { b };
}); 