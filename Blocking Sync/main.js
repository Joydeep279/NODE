const { pbkdf2Sync } = require("crypto");

const key = pbkdf2Sync("secret", "salt", 5000000, 64, "sha512");
console.log(key.toString("hex"));
