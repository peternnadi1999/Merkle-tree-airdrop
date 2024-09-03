import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("MerkleAirdrop", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMerkleAirdrop() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const MerkleAirdrop = await hre.ethers.getContractFactory("Lock");
    const merkleAirdrop = await MerkleAirdrop.deploy();

    return { merkleAirdrop, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should verify if user has claimed", async function () {
      const { merkleAirdrop } = await loadFixture(deployMerkleAirdrop);
    });
  });
});
