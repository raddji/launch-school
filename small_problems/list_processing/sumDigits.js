// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.


/* 
Input: number
Output: number

Rules: 
- Number can be multiple digits
- Cannot use listed statements 
- Sum is made up of adjoining digits added together

Algo:

- String(), split().
- use reduce() to sum the values of `inputArr` in `result`
- return `result`

*/

function sum(num) {
  return String(num).split("").reduce((a, b) => Number(a) + Number(b));
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45