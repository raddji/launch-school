/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 
*/

/*
Understanding the [P]roblem
===========================

Input:
  - two numbers:
    - num: the number we want to start at
    - s: length of the array we're going to create

Output:
  - an array
    - has `s` length of numerical palindromes
    - palindromes are sequences read the same fwd & backwards

Rules:
  - if any of the inputs is not a number or is < than 0, return "Not valid"
  - single digit numbers are not counted as palindromes
  - if `num` is a palindrome itself, then it should be included in the output array
  - if `s` is 0, then we return an empty array


[E]xamples and Test Cases
=========================

[D]ata Structure / Input to Output
================

6, 4 => [11, 22, 33, 44]

6, 4 => [] => [11, 22, 33, 44]

101 -> '101' ->
['1', '0', '1'] (backwards) ['1', '0', '1'] -> '101'


- array
- iterate through numbers from `num` to generate values in array

[A]lgorithm
===========

(Grace)
- check whether `num` and `s` are valid numbers
  - check if `num` and `s` are numbers and are greater than 0
- set variable `result` to an empty array
- while the length of `result` is less than the input `s`
- set variable `count` to `num`
- if `count` is a palindrome, add it to `result`
  - convert the number into a string
  - check if the string forwards matches the string backwards
- increment `count`
- return `result`

(Derek)
- set up guard clauses for
  - invalid inputs
  - others...
- declare a variable 'finalArr' and initialize to empty array
- iterate starting at num and stop when 'finalArr' has a length of s
  - convert current num into str 
  - conditional to check for palindrome
    - strNum equals reverse of strNum???
    - yes? => add into 'finalArr'
  - increment num
- return 'finalArr'

*/

// Raddi: 

// start iterating through numbers beginning at num
// if number has more than two digits compare first digit to second digit 
    // if they are the same, add them to output array
// keep iterating and comparing and adding to the output array until its length is the same as the `s` parameter

/*
- check whether `num` and `s` are valid numbers
  - check if `num` and `s` are numbers and are greater or equal to 0
- set variable `result` to an empty array
- while the length of `result` is less than the input `s`
- set variable `count` to `num`
- if `count` is a palindrome, add it to `result`
  - convert the number into a string
  - check if the string forwards matches the string backwards
- increment `count`
- return `result`

[C]ode with Intent
==================
*/
function isPalindrome(number) {

}

function isValidNumber(input) {
  return (typeof input === 'number') && (input >= 0);
}

function palindrome(num, s) {
  if (!isValidNumber(num) || !isValidNumber(s)) {
    return "Not valid";
  }

  let result = [];

  while (result.length < s) {
    let count = num;

    if (isPalindrome(count)) {
      result.push(count);
    }
    count += 1;
  }

  return result;
}




console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"


