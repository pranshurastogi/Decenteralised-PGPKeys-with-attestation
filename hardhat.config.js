require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings:{
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.7.6",
      }
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    local: {
      url: "http://localhost:24012/rpc"
    },
    goerli: {
      url: process.env.GOERLI || "",
      accounts: [`0x${process.env.ACCOUNT1}`],
      chainId: 5,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720
    },
    mode: {
      url: process.env.MODE || "",
      accounts: [`0x${process.env.ACCOUNT1}`],
      chainId: 919,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720
    },
    base_test: {
      url: process.env.GOERLI_BASE || "",
      accounts: [`0x${process.env.ACCOUNT1}`],
      chainId: 84531,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720
    },
    optimism_test: {
      url: process.env.GOERLI_OPTIMISM || "",
      accounts: [`0x${process.env.ACCOUNT1}`],
      chainId: 420,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN,
  }
};