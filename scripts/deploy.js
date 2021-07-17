const MockOpenSeaMetaData = {
  description: "a bunch of description text",
  external_url: "https://openseacreatures.io/3",
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmemestatic.fjcdn.com%2Fpictures%2FRunescape_8449f5_6366030.jpg",
  name: "Darshan Darshan",
  attributes: [
    {
      trait_type: "Base",
      value: "Starfish",
    },
    {
      trait_type: "Level",
      value: 5,
    },
  ],
};

async function main() {
  //Get connection to etherium using ethers lib
  const [deployer] = await ethers.getSigners();

  console.log("Depoying contracts with the account: ", deployer.address);

  console.log("Account balance: ", (await deployer.getBalance()).toString());
  console.log("---------------------1----------------------");

  //Getting compiled smart contract
  console.log("Basic Contract Deployment");
  const MyFirstContract = await ethers.getContractFactory("Contract");
  const deployedContract = await MyFirstContract.deploy();

  console.log("Deployed  Storage contract address: ", deployedContract.address);

  await deployedContract.setNumber(7);

  let result = BigInt(await deployedContract.getNumber()).toString();
  console.log("Stored value in contract is: ", result);

  console.log("---------------------2----------------------");

  const NFT_CONTRACT_NAME = "niftyVerse";
  const NFT_CONTRACT_SYMBOL = "NV";

  const NFTContract = await ethers.getContractFactory("StudentNFTContract");
  const deployedNFTContract = await NFTContract.deploy(
    NFT_CONTRACT_NAME,
    NFT_CONTRACT_SYMBOL
  );

  console.log("Deployed NFT contract address: ", deployedNFTContract.address);
  let tokenID = 1;

  console.log("FIRST MINT");
  const tokenURI =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmemestatic.fjcdn.com%2Fpictures%2FRunescape_8449f5_6366030.jpg&f=1&nofb=1";
  await deployedNFTContract.mint(deployer.address, tokenID, tokenURI);
  const NFTURI1 = await deployedNFTContract.tokenURI(tokenID);
  console.log(`First NFT MetaData: ${NFTURI1}`);

  console.log("SECOND MINT");
  tokenID += 1;
  await deployedNFTContract.mint(
    deployer.address,
    tokenID,
    JSON.stringify(MockOpenSeaMetaData)
  );

  const NFTURI2 = await deployedNFTContract.tokenURI(tokenID);

  console.log("Second NFT MetaData: ");
  console.log(JSON.parse(NFTURI2));
}

main();
