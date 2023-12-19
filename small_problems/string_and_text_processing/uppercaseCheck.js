// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

/*
input: string 
output: boolean

rules: 
  returns true only if all character of input are uppercase 
          otherwise false 

  we can ignore unknown characters / non-letters 

data structure: 

string -> array -> conditional 

algorithm: 

set variable `inputArr` to the input converted to an array
iterate over `inputArr` 
  if each element compared to the uppercase version of itself returns true, then return true to the function
      otherwise return false 
*/

function isUppercase(str) {
  let inputArr = str.split(""); 

  return inputArr.every((substring) => {
    return substring === substring.toUpperCase();
  });
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true