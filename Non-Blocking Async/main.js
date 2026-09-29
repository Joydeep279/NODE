const { pbkdf2,  } = require("crypto");
const { readFile } = require("fs");
const http = require("http");

const a = 100000,
  b = 2000;

readFile("../example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Read Done!");
});

pbkdf2("password", "salt", 10000000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});

// http.get("http://www.github.com", (res) => {
//   console.log("MEOW");
// });

setTimeout(() => {
  console.log("Timer Over!");
}, 0);

console.log("Mul: ", a * b);
