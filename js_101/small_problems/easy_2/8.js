// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// input: array
// output: array

// rules: 
// returned values in output array should sit in indices 0, 2, 4, 6, etc. 
// if input array is empty, return input array
// if input array contains one element, return that element

// data structure: 
// [2, 3, 4, 5, 6, 7] => [2, 4, 6]
// index [0, 1, 2, 3, 4, 5] => index [0, 2, 4]
// index of odd elements increments by two 

// algorithm: 
// - set a `outputArray` to an empty array
// - iterate over input array 
// - set variable `currentIndex`
//  - if currentIndex is even, save the element at that index to `outputArray`
// return `outputArray`

function oddities(arr) {
  let outputArray = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentIndex = arr.indexOf(arr[idx]);
    // console.log(currentIndex);
    if (currentIndex % 2 === 0) {
      outputArray.push(arr[currentIndex]);
    }
  }
  return outputArray;
}

// solution 2: 
// function oddities(arr) {
//   let outputArray = [];
//   for (let idx = 0; idx < arr.length; idx += 2) {
//     outputArray.push(arr[idx]);
//   }
//   return outputArray;
// }



console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []