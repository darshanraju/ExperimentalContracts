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
    kovan: {
      url: "https://kovan.infura.io/v3/25ef01a5beaa424785dd92820a5a8cb5",
      accounts: [process.env.KOVAN_ACCOUNT],
      saveDeployments: true,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/25ef01a5beaa424785dd92820a5a8cb5",
      accounts: [process.env.RINKEBY_ACCOUNT],
      saveDeployments: true,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
