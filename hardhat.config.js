require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_SCAN_KEY = process.env.POLYGON_SCAN_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGON_SCAN_KEY,
    },
  },
};
