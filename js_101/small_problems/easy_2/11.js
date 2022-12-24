// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// input: number
// output: string

// rules: no use of standard built-in conversion methods

// data structure: 123 => '123'

// algorithm: 
// set a `DIGITS` array to hold the string values of 0-9
// set a variable `result` to an empty string

// with a while loop the first iteration executes only if the condition evaluates to true, whereas with a do/while loop, the first iteration executes no matter what, and only then the condition is evaluated

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  

function integerToString(number) { 
  let result = '';
  if (number === 0) {
    result = DIGITS[number];
  } else {
    while (number > 0) {
      let remainder = number % 10;
      number = Math.floor(number / 10);
      result = DIGITS[remainder] + result;
    }
  }

  return result;
}

console.log(integerToString(123));
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"