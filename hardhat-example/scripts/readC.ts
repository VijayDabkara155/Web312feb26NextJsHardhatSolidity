import { artifacts } from "hardhat";
import { createPublicClient, http } from "viem";
import { localhost } from "viem/chains";


// Define a function 
async function main() {
    console.log("artifacts:", artifacts);
    const artifact = await artifacts.readArtifact("C");
    console.log("artifact:", artifact);

    // create viem public client
    const publicClient = createPublicClient({
        chain: localhost,
        transport: http(),
    });
    console.log("publicClient:", publicClient);
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    let fn = await publicClient.readContract({
        address: contractAddress as `0x${string}`,
        abi: artifact.abi,
        functionName: "fname"
    });
    console.log("firstname:", fn);
}

// Call the function
main();