// Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

// You are provided with the problem description above. Your tasks for this step are:

// To make notes of your mental model for the problem, including explicit and implicit rules
// Write a list of questions for things that aren't clear about the problem from the description provided

/* 
Understanding the Problem, Mental model: 
  Explicit rules: 
  - we are working with an array of strings
  - we'll be returning a new array of strings, with the same number of elements but sorted in a different way
  - what makes consonants adjacent: 
    - if they are next to each other in the same word 
    ["blue", "black", "purple", "red"]  => ["purple", "blue", "black", "red"]
    - or if they are in adjacent words with a space in between them

  Implicit rules: 
    - a string element can consist of more than one words
*/

function sortStringsByConsonants(strings) {

  let sortedStrings = strings.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));

  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for (let i = 0; i < string.length; i += 1) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
      if (tempString.length > 1 && tempString.length > count) { count = tempString.length }
    } else {
      if (tempString.length > 1 && tempString.length > count) { count = tempString.length }
      tempString = '';
    }
  }

  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // Expected: ['dddaa', 'ccaa', 'aa', 'baa'] Actual: ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // Expected: ['salt pan', 'can can', 'batman', 'toucan'] Actual: ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // Expected: ['bar', 'car', 'far', 'jar'] Actual: ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // Expected: ['month', 'day', 'week', 'year'] Actual: ['day', 'week', 'month', 'year']