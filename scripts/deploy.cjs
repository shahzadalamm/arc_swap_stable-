import hre from "hardhat";

async function main() {
  console.log("Deploying contract...");
  const arcSwap = await hre.ethers.deployContract("ArcSwap");
  await arcSwap.waitForDeployment();
  console.log("SUCCESS! Contract deployed to:", arcSwap.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
