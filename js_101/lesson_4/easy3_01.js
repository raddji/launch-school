let numbers = [1, 2, 3, 4];

// 1. Problem
// input: array
// output: empty array 

// 2. Examples/ test/ explicit/ implicit
// initial array is NOT empty
// initial array is mutated => becomes empty

console.log('result: ', emptyArray(numbers)); 

// 3. Data Structure
//  input           output 
// [a, b, c, d, ... ] =>  []

// 4. Algorithm 
// start with the first OR last element of the array
// take the element and remove it from the array
// repeat with next element until array is empty

// 5. Code 


// Solution 1: 
// function emptyArray(arr) {
//   while (arr.length > 0) {
//     arr.pop();
//   }

//   return arr;
// }

// Solution 2: 
// function emptyArray(arr) {
//   while (arr.length > 0) {
//     arr.shift();
//   }
  
//   return arr;
// }

// Solution 3: 

// 

// Solution 4:

function emptyArray(arr) {
arr.splice(0);

return arr;
}