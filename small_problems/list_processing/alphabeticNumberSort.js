// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

/* 

Problem, rules, thoughts: 

Take the input of numbers
Find the equivalent representations in English words 
Sort the English words in alphabetical order
Find the equivalent back to numbers from English words

What does it mean sorted based on the English word for each number? 
0 is "zero"
1 is "one"
2 is "two"

[0, 1, 2, 3, 4, 5, 6, 7, 8,...]
["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

Input: array
Output: new array

Should I use an array or an object in my solution?

let nineteenArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

numWords = {
  "one": 1, 
  "two": 2,
  "three": 3, 
  "four": 4,
  "five": 5,
  "six": 6, 
  "seven": 7,
  "eight": 8,
  "nine" : 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14, 
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19
}; 

-set `nineteenArr` to an array of the words for the numbers from 0 to 19 (Is there another way around this?) 
-iterate over input array
-set `inputIntoWords` to empty array
-on each iteration of `nineteenArr` if the item's index is strictly equal to the number from the inputArr at the same index, add the item from inputArr to inputIntoWords array
-sort `inputIntoWords` array generically
-iterate over new mutated `inputIntoWords` array and on each iteration, transform the item the same way we transformed it into a word earlier
-return new sorted array


[0, 1, 2, 3, 4, 5..]

0 - 1- 2- 3- 4- 5

["zero", "one", "two", "three", "four", "five"...]
  0          1     2       3       4         5
*/

// let numWordsSorted = numWords.sort();
// console.log(numWordsSorted);
// numWordsSorted.forEach((word, idx) => console.log(word, idx));

function alphabeticNumberSort(numArr) {
  let nineteenArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  let numArrToWords = [];
  nineteenArr.forEach((_, idx) => {
    if (idx === numArr[idx]) {
      numArrToWords.push(nineteenArr[idx]);
    }
  });

  numArrToWords.sort();

  let outputArr = [];
  numArrToWords.map((word) => {
    if (nineteenArr.includes(word)) {
      outputArr.push(nineteenArr.indexOf(word)); 
    }
  });

  return outputArr;
}

let numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(alphabeticNumberSort(
  numsArr));



  console.log(numsArr);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]