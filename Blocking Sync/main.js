const { pbkdf2Sync } = require("crypto");

const a = 2000;
const b = 3000;

setTimeout(() => {
  console.log("Meow");
}, 0);

// Blocks Main Threads
const key = pbkdf2Sync("secret", "salt", 5000000, 64, "sha512");
console.log(key.toString("hex"));

console.log("MUL: ", a * b);
