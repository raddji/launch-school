// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

/*
3:30 - 3:37

input: string
output: string 

output string has staggered capitalization
empty spaces count towards characters and string length as well as non-alphabetic characters 

iterate over string 
set variable `outputString` to empty string
  if current character's index is even  
    add the character to `outputString` and capitalize it
  if current character's index is odd 
    add the character to `outputString` and explicitly lowercase it
return `outputString`
*/

function staggeredCase(str) {
  let outputString = "";
  
  for (let charIdx = 0; charIdx < str.length; charIdx += 1) {
    if (charIdx % 2 === 0) {
      outputString += str[charIdx].toUpperCase();
    } else {
      outputString += str[charIdx].toLowerCase();
    }
  }

  return outputString;
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"