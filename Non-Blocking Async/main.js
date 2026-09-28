const crypto = require("crypto");


// Blocks Main thread
crypto.pbkdf2("joydeep", "salt", 5000000, 64, "sha512", (err, hashKey) => {
  console.log(hashKey.toString('hex'));
});
