# Hardhat tips

## Running local deployments

1. Start local blockchain
   $ npx hardhat node
2. Compile
   $ nxp hardhat compile
3. Migrate
   a. Add contract to deployent script
   b. $ npx hardhat run --network localhost scripts/deploy.js
4. Interact with truffle console
   a. Get the contract on local blockchain
   const contract = await ethers.getContractFactory(`${ContractName}`);
   contractInstance = await contract.attach(`${address of deployed contract}`)  
    Address of deployed contract in stdout of migration command (Step 3.b.)
5. Interact with contract
   await contractInstance.whateverMethod()
