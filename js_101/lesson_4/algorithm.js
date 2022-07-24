// - split strings inputs into two arrays of separate characters
// - create an empty array where the non-common characters will be pushed to
// eslint-disable-next-line max-len
// - loop over each array of string characters and compare them, pushing non common characters to the empty array
// eslint-disable-next-line max-len
// - when the loop is over and the non-common characters are gathered in their own array, display the length of that array

//How to tackle duplicate characters? Account for duplicates!

// Anagram difference
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.

/*
Input: two strings
Output: number (integer)
Rules:
  -all inputs will be lowercase
  -all input strings will be comprised of letters (lowercase)
  -a word is an anagram of another word if they have the same letters, the same number of times
  -two empty strings are considered anagrams
  -we want to remove as few characters as possible from each string
Data structure:
  -Array of characters from the input strings
  -Array of the non-common characters
*/

console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10

//Raddi: 
// - split strings inputs into two arrays of separate characters
// - create an empty array where the non-common characters will be pushed to
// - starting with the first element of the first array, check to see if it is contained in the second array's elements
// if it is not contained in the second array, push it to the empty array
// if it is contained in the second array, find out how many times
// - when the loop is over and the non-common characters are gathered in their own array, display the length of that array

// Ambarish
// Step 1: create an empty array and store the first word split into letters.
// step 2: create another array for the second word.
// step 3: iterate the first array to find a match with the second array
// step 3.1: if a match is found more than once, add the second, third match
// and so on.
// step 4: store the non-matching characters and the multiple match chars
//into a new array.
// step 5: find the length of the new array and display it


// Matt:
// 1. split the two strings into two arrays
// 2. if both array lengths are zero, return zero
// 3. else if one string length is greater than one and the other is zero, return the length 1 of the greater than zero array 
// 4. loop through each character of the first array and check if some of the the current iteration elements is in the second arary
// 5. if not remove the element and add to a counter variable 
// 6. else continue to the next iteration
// 7. return the counter value