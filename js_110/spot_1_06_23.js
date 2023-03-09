/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

/*
Problem
- input: string 
- output: number (count of duplicates)

- distinct case- insensitive aplha chars and numerio digit
that occurs more than once in the inputString
- count the number of Duplicates
- if the same char occur more than once it is still consider a count of 1
Example

Data Structure
- string => count (number)
- init array 
Algo

- init array to an empty array
- init copyStr to inputStr
- convert the copyStr to all lowercase chars
- convert the copyStr to an array of chars called chars
- sort the copy str in alpha order
- iterate through the th chars
  - if the current char is equal to the next char and check if the char is  not in the array
    - add the char to the array
return length of arrray
*/

function duplicateCount(string) {
  let array = [];
  let copyStr = string;
  let lowercaseStr = copyStr.toLowerCase();
  let chars = lowercaseStr.split('');
  let sorttedStringArray = chars.sort();
  
  for(let idx = 0; idx < sorttedStringArray.length; idx += 1) {
    let char = sorttedStringArray[idx];
    if (char === sorttedStringArray[idx + 1] && !array.includes(char)) {
      array.push(char);
    }
  }
  return array.length;
}

console.log(duplicateCount("") === 0);
console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("Indivisibility") === 1);
console.log(duplicateCount("Indivisibilities") === 2);