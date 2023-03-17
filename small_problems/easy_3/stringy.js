// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.


/* 
input: integer > 0
output: string of '1's and '0's

rules: 
- output string length should be equal to the input integer
- output string always starts with '1' and alternates '0' and '1'

notes: 
- output string has 1s at even indeces, and 0s at odd indeces

algorithm: 
- set a variable `stringArray` to empty array
- use an iteration method, to check the length of `stringArray`, and while it is smaller than the input integer
  - set counter at 0
  - if counter is even, push a '1' to the empty array, if counter is odd, push a '0' to empty array
  - increment counter
- join array
- return string

*/

function stringy(integer) {
  let stringArray = [];
  let counter = 0;
  
  while (stringArray.length < integer) {
    
    if (counter % 2 === 0) {
      stringArray.push('1');
    } else if (counter % 2 === 1) {
        stringArray.push('0');
      }
      counter += 1;
    }

    return stringArray.join('');
  }

console.log(stringy(6));    // "101010"
console.log(stringy(7));    // "1010101"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"