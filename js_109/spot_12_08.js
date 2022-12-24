// Example 7
// Why does this output what it does? 
const numArr = [8, 13, 27];
const strArr = ['apple', 'banana', 'cantaloupe'];
const outerArray = [numArr, strArr]; // 2D array; array of arrays. 

// What are the array methods that take callbacks? 
// This class of array methods are used to iterate over an array's elements and do something with them. 
// forEach -> This doesn't do anything with the array itself, it's a replacement for a for loop. Returns `undefined`
// map     -> This is meant to transform the array that it's called on. It won't mutate the original array (`outerArray` in this case), but it will return a new array of the same length with the new array's elements transformed according to the callback. 
// filter   -> This is meant to select elements from the original array that meet a specific criteria according to the callback. It will return a new array that is a subset of the original array. 

// What is a callback? 
// A callback is just a function. Its intended use is as an argument to another function. The array methods (the 'other function') invoke the callback internally on each element of the outer array. 

// A tricky thing about these callbacks is that they have a pre-defined list of arguments that they expect - because of the array method. Since the array method invokes each of these functions internally - it will also pass in the arguments as these functions are invoked. 
// The list of arguments that each of these callbacks can expect: 
// (currentArrayElement, currentArrayIndex, currentArrayReference)

// The callback function will be invoked as many times as there are elements in the outer array. 
// For example -> our outer array contains only two elements, `numArr` and `strArr`. So, our callback will be invoked as: 
// mapCallback(numArr)
// mapCallback(strArr)

// Each of the array methods will have a different behavior based on the return value of the callback. Just as the array method expects a particular parameter list for the callback, it also expects a particular return type or value. Map just expects any value at all. The new array will be built from these callback return values. Filter expects a truthy or falsy value. The new array will be built from only those callback invocations that returned a truthy value - the new elements of the array will be the elements of the calling array at the index where the callback returned truthy. 

const transformedArray = outerArray.map(mapCallback);
// [[27], ['apple']]

function mapCallback(outerElement) {
  // Each `outerElement` is itself an array.
  // `outerElement` is first invocation `numArr`
  // `outerElement` is second invocation `strArry`

  const filteredArray = outerElement.filter(filterCallback);
  // ['apple']
  return filteredArray;
}

// numArr = [8, 13, 27];
// strArr = ['apple', 'banana', 'cantaloupe'];
function filterCallback(innerElement) {
  // first invocation: innerElement === 8
  // second invocation: innerElement === 13
  // third invocation: innerElement === 27
  // fourth invocation: innerElement === 'apple'
  // fifth invocation: innerElement === 'banana'
  // sixth invocation: innerElement === 'cantaloupe'
  if (typeof innerElement === 'number') {    // if it's a number
    return innerElement > 13;
  } else {
    return innerElement.length < 6;
  }
}

// outerArray.map(arr => {
//   return arr.filter(item => {
//     if (typeof item === 'number') {    // if it's a number
//       return item > 13;
//     } else {
//       return item.length < 6;
//     }
//   });
// });

// => [ [ 27 ], [ 'apple' ] ]