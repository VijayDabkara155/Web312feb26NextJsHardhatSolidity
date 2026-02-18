import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import { network } from "hardhat";

describe("ModifierTest Contract", function () {
  let viem: Awaited<ReturnType<typeof network.connect>>["viem"];

  // ✅ Setup before tests
  before(async () => {
    const connection = await network.connect();
    viem = connection.viem;
  });

  // ✅ Test 1 — Check Owner
  it("Should set deployer address as owner", async () => {
    const [deployer] = await viem.getWalletClients();

    const contract = await viem.deployContract("ModifierTest");

    const owner = await contract.read.owner();

    assert.equal(
    owner.toLowerCase(),
    deployer.account.address.toLowerCase()
);
  });

  // ✅ Test 2 — Owner can update x
  it("Owner should update x", async () => {
    const contract = await viem.deployContract("ModifierTest");

    await contract.write.setValueX([55n]);

    const value = await contract.read.x();

    assert.equal(value, 55n);
  });

  // ✅ Test 3 — Non Owner should FAIL
  it("Non-owner should NOT call setValueX", async () => {
    const [, attacker] = await viem.getWalletClients();

    const contract = await viem.deployContract("ModifierTest");

    await assert.rejects(
      async () => {
        await contract.write.setValueX(
          [99n],
          { account: attacker.account }
        );
      },
      (err: any) => {
        return err.message.includes("Not Owner!");
      }
    );
  });
});
