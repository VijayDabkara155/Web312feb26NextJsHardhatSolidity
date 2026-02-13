import { network } from "hardhat";

const { viem } = await network.connect({
    network: "localhost",
});

async function main() {
    console.log("Deploying contract...");

    const contract = await viem.deployContract("A");

    console.log("Contract deployed at:", contract.address);
}
main().catch(console.error);