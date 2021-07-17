async function main() {
  const [deployer] = await ethers.getSigners();

  const NFT_CONTRACT_NAME = "niftyVerse";
  const NFT_CONTRACT_SYMBOL = "NV";

  const NFTContract = await ethers.getContractFactory("StudentNFTContract");
  const deployedNFTContract = await NFTContract.deploy(
    NFT_CONTRACT_NAME,
    NFT_CONTRACT_SYMBOL
  );

  console.log("Deployed NFT contract address: ", deployedNFTContract.address);
  const tokenURI =
    "https://ipfs.io/ipfs/QmbBnUjyHHN7Ytq9xDsYF9sucZdDJLRkWz7vnZfrjMXMxs?filename=2-ST_BERNARD.json";
  let tokenID = 1;

  console.log("Minting first NFT...");

  await deployedNFTContract.mint(deployer.address, tokenID, tokenURI);
  const NFTURI1 = await deployedNFTContract.tokenURI(tokenID);
  console.log(`First NFT MetaData: ${NFTURI1}`);
}

main();
