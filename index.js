const bitcoin = require("bitcoinjs-lib");

function getAddress(node, network) {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;
}

function getWallet(node, network) {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network });
}

module.exports = (function () {

  //   const keyPair = bitcoin.ECPair.makeRandom();
  //   const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  //   const publicKey = keyPair.publicKey.toString("hex");
  //   const privateKey = keyPair.toWIF();
  //   console.log("Public Address: ", address);
  //   console.log("Private Key: ", privateKey);
  //   console.log("Public Key: ", publicKey);

  
  let bip32 = require("bip32");
  let bip39 = require("bip39");
  //   const mnemonic =
  //     "praise you muffin lion enable neck grocery crumble super myself license ghost";
  var mnemonic = bip39.generateMnemonic();
  console.log("mnemonic:", mnemonic);

  const seed = bip39.mnemonicToSeedSync(mnemonic);
  console.log("seed:", seed);

  const root = bip32.fromSeed(seed);
  console.log("root:", root);
  console.log("WIF:", root.toWIF());

  console.log("getAddress:", getAddress(root.derivePath("m/0'/0/0")));
  console.log("getWallet:", getWallet(root.derivePath("m/0'/0/0")));
})();
