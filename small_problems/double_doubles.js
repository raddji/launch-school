// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

/* 

Input: number
Output: number (input multiplied by 2 unless it's an 'acronym')

123 => 246 => 
4545 => 4545 => 

Notes: if argument's length is an odd number, we can directly assume we need to multiply by 2 
- if it's an even length, then we have to check whether first half of characters is the same or equal to the second half of characters

- Algorithm:

- convert input number to an array `numArray` of number characters
- check to see if `numArray`'s length is an odd length
  - if it is return the argument doubled by 2 
- if it's an even length 
  - set variable `firstHalf` equal to argument's first character at index 0 to the argument's character at length divided by 2 index
  - set variable `secondHalf` to from character at end index (str[str.length -1]) to character at the half length of argument
    - if `firstHalf` is equal to `secondHalf`, return argument
    - otherwise, return the multiplied value of argument by 2
*/

function twice(num) {
  let numArr = String(num).split(""); // is this part
  if (numArr.length % 2 === 1) {      // even 
    return Number(num * 2);           // needed?
  }
  if (numArr.length % 2 === 0) {
    let firstHalf = numArr.slice(0, numArr.length / 2).join("");
    let secondHalf = numArr.slice(((numArr.length) / 2), num.length).join("");
    if (firstHalf === secondHalf) {
      return Number(numArr.join(""));
    } else {
      return Number(numArr.join("") * 2);
    }
  }
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676