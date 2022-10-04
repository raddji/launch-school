// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// input: two strings
// output: single string 
  // rules: if one of the strings is empty, ignore it and only add the other string to the output
  // edge cases: empty space? 

// algorithm:
  // 1. determine the length of the two input strings
  // 2. add the smaller of the two strings to the output first, then add the longer string, and then add the shorter string again

  function shortLongShort(str1, str2) {
    if (str1.length < str2.length) {
      return str1 + str2 + str1;
    } else {
      return str2 + str1 + str2;
    }
  }

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

console.log(shortLongShort('Raddi', 'isAwesome'));