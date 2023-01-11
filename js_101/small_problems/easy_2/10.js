// Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

// input: string
// output: number 

// rules: return negative number if string begins with '-'
// use stringToInteger() function

// data structure: '123' => 123
              // '-123' => -123
              // '+123' => 123

// algorithm: 
// - determine whether string begins with '+', '-', or neither
//  - if it begins with '-', return a negative number version of string
//  else if it begins with either '+' or no sign, return a positive number

function stringToInteger(str) {
  let numChars = [];
  let number;
  for (let idx = 0; idx < str.length; idx += 1) {
    numChars.push(str[idx]);
  }
  // console.log(numChars);
  return number = numChars.join('') * 1;
}


function stringToSignedInteger(str) {
  return stringToInteger(str);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
console.log(stringToSignedInteger('+123'));