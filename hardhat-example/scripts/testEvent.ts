import { network } from "hardhat";

async function main() {

    const { viem } = await network.connect({
        network: "localhost"
    });

    const contract = await viem.getContractAt(
        "EventTest", // This is the name of the contract, not the address
        "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9"
    );
    // This is the array destructuring syntax to get the first wallet client from the array returned by getWalletClients
    // object destructuring is a syntax that allows you to extract properties from an object and assign them to variables in a more concise way
    const [wallet] = await viem.getWalletClients();

    console.log("Sending tx...");

    await contract.write.sendMessage(
        ["Good Night!"],
        { account: wallet.account }
    );

    console.log("Event emitted!");
}

main().catch(console.error);