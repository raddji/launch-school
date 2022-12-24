// The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// input: string
// output: number

// rules: 
// cannot use built in JavaScript methods
// don't worry about guard clauses/ invalid input: assume all input is correct

// data structure: 
// "1234" ==> 1234

// algorithm: 
// set variable `number` to hold output
// set variable numCharsArray to []
// - iterate over characters of input string
// - save each character to numCharsArray
// assign numCharsArray's value to `number` after joining and multiplying it by 1 to convert to number
// return `number`


// my original solution: 

// function stringToInteger(str) {
//   let numChars = [];
//   let number;
//   for (let idx = 0; idx < str.length; idx += 1) {
//     numChars.push(str[idx]);
//   }
//   // console.log(numChars);
//   return number = numChars.join('') * 1;
// }

// solution 2: 

// function stringToInteger(str) {
//   return str * 1;
// }

// solution 3:

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0, 
//     1: 1, 
//     2: 2,
//     3: 3, 
//     4: 4, 
//     5: 5, 
//     6: 6, 
//     7: 7, 
//     8: 8, 
//     9: 9
//   };
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   // console.log(arrayOfDigits);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }



const DIGITS = {
  0: 0, 
  1: 1, 
  2: 2, 
  3: 3, 
  4: 4,
  5: 5, 
  6: 6, 
  7: 7, 
  8: 8, 
  9: 9
};
function stringToInteger(string) {
  let value = 0;
  let arrayDigits = string.split('').map(char => DIGITS[char]);
  arrayDigits.forEach(digit => (value = (value * 10) + digit));
  return value;
}

// split string input into array of characters
// declare an `arrayDigits` array and assign it the value of the split string input, followed by mapping each element to DIGITS' object's keys into an `arrayDigits` array
// initialize a `value` variable with initial value of 0
// iterate over `arrayDigits` and transform each number in the array by multiplying it by 10, and adding it to the `value` variable
// return `value`


console.log(stringToInteger('123'));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("-123"));