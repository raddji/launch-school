// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

function oddLengths(arr) {
  let lengths = arr.map(el => el.length);
  return lengths.filter(el => el % 2 !== 0);
}

// input: array of strings
// output: array of odd numbers

// Rules: discard even string length numbers
// use map and filter
// assume all elements are strings


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]