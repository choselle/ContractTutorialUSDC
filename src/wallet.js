const ethers = require("ethers");
const mn = require("../credentials.json");

const mnemonicSeed = mn.mnemonic;

const wallet = ethers.Wallet.fromMnemonic(mnemonicSeed);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;