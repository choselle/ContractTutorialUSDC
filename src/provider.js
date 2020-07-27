const ethers = require("ethers");
const apiKey = require("../credentials.json");

const provider = ethers.getDefaultProvider("ropsten", {
  infura: apiKey.infuraAPIKey,
});

module.exports = provider;