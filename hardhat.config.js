require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
let secret = require("./secret")

module.exports = {
   solidity: "0.8.4",

   networks: {
      ropsten: {
        url: secret.url,
        accounts: [secret.key]
      },
   },
   etherscan: {
      apiKey: secret.api,
   },
}
