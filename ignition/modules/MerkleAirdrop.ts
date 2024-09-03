import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x7B4982e1F7ee384F206417Fb851a1EB143c513F9";
const merkleRoot = "0xee9d6378d7566ee489933c1b4a7b34843f5886bb725f41dd3932858c6a52d630";
const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const merkleAirdrop = m.contract("merkleAirdrop", [tokenAddress, merkleRoot]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;

// deployed tokenAddress= 0x7B4982e1F7ee384F206417Fb851a1EB143c513F9
// merkle Root: 0xee9d6378d7566ee489933c1b4a7b34843f5886bb725f41dd3932858c6a52d630