// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.


console.log(interleave([12, 66, 102], ['foo', 'bar', 'qux'])); // [12, 'foo', 66, 'bar', 102, 'qux']
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// input: two arrays 
// output: single array (is it a new array?)

// both arrays have the same number of elements
// the length of each element can be different
// elements can be different data types/ retain their original data types

/*
we'll return a new array that doesn't mutate the original arrays

    a           b
[1, 2, 3] ['a', 'b', 'c'] => [1, "a", 2, "b", 3, "c"]
                          => [a[0], b[0], a[1], b[1], a[2], b[2]]
                          => []
                          => [a[0]] index 0
                          => [a[0], b[0]] index 0
                          => [a[0], b[0], a[1]] index 1
                          => [a[0], b[0], a[1], b[1]] index 1

index = 0
*/

// algorithm: 
// 1. take the first element from the first array
// 2. take the first element from the second array
// 3. add them to a new array 
// 4. repeat steps until we reach the end of the arrays

// !!!5. use a nested for loop to iterate over each array(why is this wrong?)

function interleave(arr1, arr2) {
  let newArray = [];
  for (let index = 0; index < arr1.length; index += 1) {
    newArray.push(arr1[index]);
    newArray.push(arr2[index]);
  }
  return newArray;
}







