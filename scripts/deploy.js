// const { ethers } = require("hardhat");

async function main() {
  //Get connection to etherium using ethers lib
  const [deployer] = await ethers.getSigners();

  console.log("Depoying contracts with the account: ", deployer.address);

  console.log("Account balance: ", (await deployer.getBalance()).toString());

  //Getting compiled smart contract
  const MyFirstContract = await ethers.getContractFactory("Contract");
  const deployedContract = await MyFirstContract.deploy();

  console.log("Deployed  Storage contract address: ", deployedContract.address);

  await deployedContract.setNumber(7);

  let result = BigInt(await deployedContract.getNumber()).toString();
  console.log("Stored value in contract is: ", result);
}

main();
