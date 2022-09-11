// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

let charsInStatement = statement.split("").filter((char) => char !== " ");
let result = {};
console.log(charsInStatement);

charsInStatement.forEach((char) => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);
// input: string
// output: object { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// 1. turn string into array of characters
