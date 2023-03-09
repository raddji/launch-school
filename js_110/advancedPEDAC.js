/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
*/

/*
Understanding the [P]roblem
===========================
Input
- String

Output
- Number, integer

Rules
- Return count of "Odd substrings"
- Substring: not just any combination, but existing sub-sequence within string
- Odd: odd number, when number is divided by 2, remainder is 1
- the input, if odd, also is part of the returned count
- duplicate substrings are counted the number of times they appear

Question
What if the input is empty? Out of bounderies of the problem. Focus at the scope of the test cases.

[E]xamples and Test Cases
=========================
1. confirming our understanding
2. checking for implicit requirements

-- mental model -- ~intermission~

1, 1, 3, 13, 41, 341, 1341

"1341" ->
"1" -> "13" -> "134" -> "1341"
 0      01      012      0123
"3" -> "34" -> "341"
 1      12      123
"4" -> "41"
 2      23
"1"
 3


- outer loop starting at index i
  - inner loop start at index j = i

- Generate all the substrings from the input and return the count of the odd ones 

[D]ata Structure
================
do I need an object or array for my solution?  

- Array

[A]lgorithm
===========
WHAT we're going to do:
- Generate all the substrings from the input and return the count of the odd ones 

HOW we're going to do it:
- a series of specific steps on how to get from input to output
- written in plain english
- language agnostic: avoid javascript syntax or method
  X "for loop" "forEach method"
  O iterate


Irina
-----
- set the result to an empty array
- split the string into an array of strings of single digits
- iterate through the digits array from start to end using index i
  - iterate through the digits from i to the end of the array
    - set a substring to the input substring from i to j index (including)
    - if the substring is evenly divisible by 2
      - continue to the next iteration
    - else,
      - add the substring to the result array
  - end loop j
- end loop i
- return the length of the result


Chase
-----
Input = string
Output = integer, # of odd substrings within input

- declare substrings and initialize to empty array []
- iterate through the string 
  - set length = 1
  - increase length by 1
  - move incrementing substrings to array


Raddi
-----
- set `inputArray` to empty array
- iterate over input characters 
  - append all substring combinations to `inputArray`
- iterate over string with an outer loop, 
  - iterate over string with an inner loop starting at second character
  - add character combinations to `inputArray`
- set `oddNums` array to []
- iterate over `inputArray` array and find elements that can be evaluated to odd numbers
- add odd numbers to `oddNums` array
- return `oddNums` array length

*/

function solve(str) {
  let inputArray = [];
  
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length + 1; j += 1) {
      inputArray.push(str.slice(i, j));
    }
  }
  console.log(inputArray);

  let oddNums = [];
  inputArray.forEach((num) => {
    if (num % 2 !== 0) {
      oddNums.push(num);
    }
  });
  return oddNums.length;
}



/* 
Will
----
    - convert string into array
    - iterate through array
      - create blank array (you want to reset this on every iteration? - Irina)
      - start with first element
        - if ele is odd, push to blank array
      - iterate through ind + 1 < array.length;
        - for each substring that is odd, push odd element to array
        - crate substrings from ind + 1, until end of array length has been reached
    - return odd substrings
    - remove nested arrays
    - return array length


Grace
-----

"1341" ->
"1" -> "13" -> "134" -> "1341"
"3" -> "34" -> "341"
"4" -> "41"
"1"

- generate all the substrings of the input string
- declare `substrings` and intialize to []
  - iterate through the all characters of the string
    - iterate a nested count that starts at the outer index
     - add the substring created from outer index to inner index to `substrings
  - after iteration, iterate through `substrings` and only keep the strings, when coerced to numbers, have a remainder of 1 when divided by 2
- return count of `substrings`

- don't improvise anything new, simply translating to algo into code
- test code often


    - convert string into array 
    - iterate through array
      - create blank array 
      - start with first element
        - if ele is odd, push to blank array
      - iterate through ind + 1 < array.length;
        - for each substring that is odd, push odd element to array
        - crate substrings from ind + 1, until end of array length has been reached
    - return odd substrings
    - remove nested arrays
    - return array lengths

"3" -> "31" -> "314"
*/



// function solve(str) {
//   return str.split('').map((ele, ind, arr) => {
//     let ans = [];

//     if (ele % 2 !==0) ans.push(ele); // repeating this one, can be refactored - Irina

//     for (let i = ind + 1; i < arr.length; i++) { 
//       ele += arr[i];

//       if (ele % 2 !==0) ans.push(ele);
//     }

//     return ans; // map method
//   }).flat().length;
// }

console.log(solve("1341")) // 7
// console.log(solve("1357")) // 10
// console.log(solve("13471")) // 12
// console.log(solve("134721")) // 13
// console.log(solve("1347231")) // 20
// console.log(solve("13472315")) // 28

// input: string
// output: array of strings

// rules: if input has no palindrome substrings, return empty array
//        if input is empty string, return an empty array