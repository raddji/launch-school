// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

/* 
10:37 - 11:00 

Problem and rules: 

Input: String
Output: Boolean

What is a palindrome? - reads the same forward and backwards
Capital letters will not count as palindrome; example: Bob is NOT a palindrome, because B !== b 
All characters matter, including empty spaces
How to account for case and empty spaces? 

- strict equality to check for case
- use UTF code point for empty space, or " "

Work with arrays
"string" -> ["s", "t", "r", "i", "n", "g"] -> boolean

Algorithm:

- set `inputArr` to input's characters 
- set `reversed` to `inputArr`'s reversed reference
- check if input is strictly equal to `reversed` once it's appended back into a string 
- if yes, return true
- no, return false

*/

function isPalindrome(str) {
  let reversedInput = str.split("").reverse();

  if (str === reversedInput.join("")) {
    return true;
  }

return false;
}



console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true