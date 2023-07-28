async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("PFP3NFT");

  await token.waitForDeployment();

  console.log("Token address:", await token.getAddress());
}
// 0xD947A6b8DA2F0e5BCDEDca7746dA4Ea562A26240

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
