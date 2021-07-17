require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    // kovan: {
    //   url: process.env.INFURA_KOVAN_KEY,
    //   accounts: [process.env.ACCOUNT],
    //   saveDeployments: true,
    // },
  },
  solidity: "0.7.3",
};
