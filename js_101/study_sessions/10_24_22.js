// Study session with Derek
// Codewars kata 7 problem

/*
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]

([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

// input: array, number 
// output: array

// rules: function will have two parameters
// input array will not be empty [].length > 0
// the number of even numbers will be at least equal to the second parameter 
// output array's length will be equal to function's second parameter

// data structure: 
// [] ==> []  

// algorithm:
// set an `evenNumbers` to an empty array
// iterate through original array and check if each number is even
// if numbers even save it into `evenNumbers` array
// compare length of `evenNumbers` array to the second parameter and take out unnecessary elements from start of array
// if the length of `evenNumbers` array is smaller or equal to `number`, keep saving even numbers to it
// return `evenNumbers` array

function lastEvenNumbers(arr, number) {
  let evenNumbers = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] % 2 === 0) {
      evenNumbers.push(arr[idx]);
      //console.log(evenNumbers);
    }
    while (evenNumbers.length > number) {
      evenNumbers.shift();
    }
  }
  return evenNumbers;
}
console.log(lastEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3 ))
console.log(lastEvenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(lastEvenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))

