// set `alphabet` to reference an array of the letters in the alphabet as its elements
// set `outputArr` to an empty array
// set `currentNumber` to 0 (representing the total sum of characters that correctly correspond to their spot in the alphabet)
// iterate over input array's elements
  // iterate over characters of each element
    // take the first character of the first element of the       input array and compare it to the first element in the `alphabet` array
    // if they are the same add 1 to `currentNumber` 
    // add the final value of `currentNumber` to the `outputArr` 
    // return `outputArray`
  
function solve(inputArray) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let outputArray = [];
  let currentNumber = 0;

  for (let idx = 0; idx < inputArray.length; idx += 1) {
    for (let j = 0; j < inputArray[idx].length; j += 1) {
      // console.log(inputArray[idx][j]);
      if (inputArray[idx][j] === alphabet[idx][j]) {
      currentNumber += 1;
      }
    }
    outputArray.push(currentNumber);
  }
  return outputArray;
}


    /*
Introduction to PEDAC

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase.  No spaces.
*/

/*
Understanding the [P]roblem
===========================
Input:
- Array of words / strings

Output:
- Array of numbers / integers (new array)

Rules:
- count of letters in a word in which the position of letter is the same position as in the alphabet
- case-insensitive, the same character, whether uppercase or lowercase, will count
- we can assume input will only consist of alphabetical characters, no special or numeric characters
- the output array should only have numbers
- if the word has no matching letters with the position in the alphabet, then its corresponding number in the return array should be 0
- input will always consist of at least one or less than 27 alphabetical characters
- input array and output array have the same number of elements (same length)

[E]xamples and Test Cases
=========================
1) Use the test cases to confirm your understanding of the problem thus far

2) Taking a look at the test cases to see if there are implied (implicit) requirements, that weren't explicitly stated in the problem statement

-- Intermission --
Do I have a mental model?

Mental model: WHAT you have to do in order to get from input to output

["abode", "ABc", "xyzD"] -> [4, 3, 1]

"abcdefghijklmnopqrstuvwxyz"

["a", "b", "c", ...]

"abode" -> 0 -> 1 -> 2 -> 3 -> 4

[D]ata Structure
================
- Asking yourself: Do I need an array or object in order to hold the values that I'm working with?

- An array...
- A string...

... of the alphabet to compare the positions to the input strings

[A]lgorithm
===========
The HOW you're going to get to input from output

- A series of steps written in plain english
  - Has to be specific enough to know how you're going to get from A to B
  - But general enough, where you're not naming specific methods
    - Indicator that you're doing it right, is that your algorithm is language agnostic

  - 

Raddi
-----

// set `alphabet` to reference an array of the letters in the alphabet as its elements
// set `outputArr` to an empty array
// set `currentNumber` to 0 (representing the total sum of characters that correctly correspond to their spot in the alphabet)
// iterate over input array
// reassign the element at the current iteration to a string of lower case characters 
  // take the first character of the first element and compare it to the first element in the `alphabet` array
    // if they are the same add 1 to `currentNumber` 
    // add the final value of `currentNumber` to the `outputArr`
    // repeat for all elements of `inputArray`
  // return `outputArray`
    ...

Sebastian
---------
// Helper function, numAlphabeticCharsInPlace: (input string, output number)
//  define alphabet string of alphabetic characters in order. all lower case.
//  convert inputString to lowercase
//  set numChars to zero
//  iterate through index numbers of inputString:
//    if character at index number inputString is equal to the same index in alphabet string; add 1 to numChars
//  return numChars

// define outputArray as empty array
// Iterate over each elelement of the array, and apply helper function to each element.
//  Add result to outputArray
// return outputArray

Emily
-----
- create an alphabet string to hold all of the letters of the alphabet.
- -Create an empty output array to hold your output numbers

-for every element in the input array ==>
  - for every letter of the string, compare the index position of the letter in the string, to the
    corresponding index position of the alphabet.
  -if the letter (lowercased) at the index position is the same as the alphabet letter, +=1 to the number in the corresponding index in your output array.
  -otherwise, do nothing and continue to the next letter.
-when you get to a new element of the input array, proceed to a new element of the output array and begin again.
-when you finish the last element of the input, return the output array of integers.

Robert
------
// declare a variable ALPHABET and assign to an object with alphabet letters as keys
// declare a variable newArr and assign to an empty array
// initialize a for loop to iterate over input array

Grace
-----
"abcdefghijklmnopqrstuvwxyz"

"abode" -> 0 -> 1 -> 2 -> 3 -> 4

- declare a variable `alphabet` and initialize it to a string with the lowercase alphabet
- declare a variable `result` and initialize it to an empty array
- iterate through the input array, and for each string, add the number of matching letters to `result`

    - declare a variable `total` and initialize it to 0
    - convert the current word to lowercase
    - iterate through the current word
    - if the index of the current letter matches the index of the same letter in the `alphabet` string, increment `total` by 1
    - return `total`

- return the `result` array

[C]ode with Intent
==================

- Converting our algorithm into code
- If something goes wrong in our solution, STOP CODING, and go back to your algorithm
- TEST YOUR CODE FREQUENTLY!!!


// Helper function, numAlphabeticCharsInPlace: (input string, output number)
//  define alphabet string of alphabetic characters in order. all lower case.
//  convert inputString to lowercase
//  set numChars to zero
//  iterate through index numbers of inputString:
//    if character at index number inputString is equal to the same index in alphabet string; add 1 to numChars
//  return numChars

// define outputArray as empty array
// Iterate over each elelement of the array, and apply helper function to each element.
//  Add result to outputArray
// return outputArray
*/

// function numAlphabeticCharsInPlace(inputStr) {
//   let alphaStr = "abcdefghijklmnopqrstuvwxyz";
//   inputStr = inputStr.toLowerCase();
//   let numChars = 0;

//   for (let i = 0; i < inputStr.length; i += 1) {
//     if (inputStr[i] === alphaStr[i]) {
//       numChars += 1;
//     }
//   }
//   return numChars;
// }

// function solve(inputArr) {
//   let outputArr = inputArr.map(numAlphabeticCharsInPlace);
//   console.log(outputArr);
//   return outputArr;
// }

// function solve(inputArr) {
//   let outputArr = [];
//   inputArr.forEach(string => {
//     outputArr.push(numAlphabeticCharsInPlace(string));
//   })
//   console.log(outputArr);
//   return outputArr;
// }


console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
solve(["abide","ABc","xyz"])  // [4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) // [6,5,7]
solve(["encode","abc","xyzD","ABmD"]) // [1, 3, 1, 3]

// // Grace solution: 
// function solve(inputArr) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let result = [];

//   for (let idx = 0; idx < inputArr.length; idx += 1) {
//     let currentElement = inputArr[idx];
//     result.push(numOfMatchingLetters(currentElement));
//   }

//   return result;
// }

// function numOfMatchingLetters(string) {
//   let total = 0;
//   string = string.toLowerCase();
//   console.log(string);
// }

// /////////////////////

// function solve(inputArr) {
//   let result = [];

//   for (let idx = 0; idx < inputArr.length; idx += 1) {
//     let currentElement = inputArr[idx];
//     result.push(numOfMatchingLetters(currentElement));
//   }

//   console.log(result);
//   return result;
// }

// function numOfMatchingLetters(string) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let total = 0;
//   string = string.toLowerCase();

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (string[idx] === alphabet[idx]) total += 1;
//   }

//   return total;
// }

