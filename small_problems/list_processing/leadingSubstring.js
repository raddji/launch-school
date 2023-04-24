/*  Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Problem & Rules: 

Input: string
Output: array of strings

We can use looping to create substrings 
We don't need all possible substring combinations
Need only all possible substrings that start with the first letter of the input string

Algorithm:

- set `buildString` to empty string
- use method chaining to return the input string split into an array, transformed into a new array made of each character of string array appended to `buildString`

*/

function leadingSubstrings(str) {
  let buildString = "";
  return str.split("").map(item => buildString += item);
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]