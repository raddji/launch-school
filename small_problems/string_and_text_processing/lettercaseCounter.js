// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

/* 

input: string 
output: object 

data structure: string -> array -> object 

notes: 
  empty space count as a 'neither` character 

algo: 
  set variable `inputArr` to the input converted to an array
  set variable `counter` to an object literal with three properties (lowercase, uppercase, neither) each with value of 0 
  iterate over `inputArr` 
    check if current character is `isLowerCase(currChar)` returns true, and if it does, increase `lowercase` of `counter` with 1
    check if current char is `isUpperCase(currChar)` returns true and if it does increase `uppercase` of `counter` with 1 
    else increase `neither` of `counter` with 1 
  return `counter`
  

  write helper functions `isLowerCase` and `isUpperCase`


  How to check for `neither` characters? 
    - they will be characters that are between and including 'a' and 'z', and 'A' and 'Z'
*/ 


function letterCaseCount(str) {
  let inputArr = str.split("");
  let counter = {
    lowercase: 0,
    uppercase: 0, 
    neither: 0,
  };

  for (let idx = 0; idx < inputArr.length; idx += 1) {
    let char = inputArr[idx];

    if (isLowerCase(char)) {
      counter.lowercase += 1;
    } else if (isUpperCase(char)) {
      counter.uppercase += 1;
    } else {
      counter.neither += 1;
    }
  }

  return counter;
}

function isLowerCase(char) {
  if (char === char.toLowerCase() && char <= "z" && char >= "a") {
    return true;
  } else return false; 
}

function isUpperCase(char) {
  if (char === char.toUpperCase() && char <= "Z" && char >= "A") {
    return true;
  } else return false;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
