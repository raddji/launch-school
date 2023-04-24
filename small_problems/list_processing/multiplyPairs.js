/* Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
-----------------------------------------------------------------

Problem, Rules: 

Input: two arrays
Output: an array

We are dealing with numbers and arrays
The return value is a new array
We'll be sorting an array of numbers, therefore will have to utilize sort()'s callback function

[2, 4], [4, 3, 1, 2] -> [8, 6, 2, 4], [16, 12, 4, 8] -> [2, 4, 4, 6, 8, 8, 12, 16]

let arr1 = [2, 4];
let arr2 = [4, 3, 2, 1];

Iterate
Until you reach the end of arr2, combine the first element of arr1, with each element of arr2

Algo: 
- set an `outputArr` to empty array
- iterate over first input array and set `currentItem` to the value at current index
  - sub iterate over the second input array and multiply the current element of the second array to `currentItem`
  - add that multiplied number to `outputArr`
  - sort `outputArr` ascending order
  - return the sorted array

*/

function multiplyAllPairs(arr1, arr2) {
  let output = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    let currentItem = arr1[idx];
    for (let jdx = 0; jdx < arr2.length; jdx += 1) {
      output.push(currentItem * arr2[jdx])
    }
  }

  output.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
  }
  });

  return output;
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs([5, 10], [1, 5, 10, 20])); // [5,  10,  25,  50, 50, 100, 100, 200];