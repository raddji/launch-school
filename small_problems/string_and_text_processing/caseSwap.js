// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

/*

input: string
output: string 

rules: convert each character to the opposite 

data structure: string -> array -> string

algorithm: 
  convert input to an array and save to variable `inputArr`

  set two helper functions that convert a character to lowercase OR uppercase 

  iterate over inputArr
    if current char is lowercase convert to uppercase
    if current char is uppercase convert to lowercase 
  join inputArr 

  return inputArr

NB: Not a pretty solution, so figure out a better one for second round
*/

function swapCase(str) {
  let inputArr = str.split("");

  for (let idx = 0; idx < inputArr.length; idx += 1) {
    if (inputArr[idx] === inputArr[idx].toLowerCase()) {
      inputArr[idx] = makeUppercase(inputArr[idx]);
    } else if (inputArr[idx] === inputArr[idx].toUpperCase()) {
      inputArr[idx] = makeLowercase(inputArr[idx]);
    }
  }
  return inputArr.join("");
}

function makeLowercase(char) {
  if (char === char.toUpperCase()) {
    char = char.toLowerCase();
  }
  return char;
}

function makeUppercase(char) {
  if (char === char.toLowerCase()) {
    char = char.toUpperCase();
  }
  return char;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"