const crypto = require("crypto");
const bech32 = require("bech32");

let data = '1';

const sha256Digest = crypto
  .createHash("sha256")
  .update(data, "hex")
  .digest("hex");

const ripemd160Digest = crypto
  .createHash("ripemd160")
  .update(sha256Digest, "hex")
  .digest("hex");

const bech32Words = bech32.toWords(Buffer.from(ripemd160Digest, "hex"));
const words = new Uint8Array([0, ...bech32Words]);
address = bech32.encode("bc", words);
console.log(address);