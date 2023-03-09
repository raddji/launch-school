// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//     return console.log('console log:', num);
//     }
//   });
// });
// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });


// console.log('myArr: ', myArr);






// console.log('my arr:', myArr);


// let a = 1;

// function doit(a) {
//   console.log(a); 
// }

// doit(3);
// console.log(a); 

// let numbers = [3, 9, 8, 2, 4, 6, 7, 5, 1];

// let onlyOdds = (nums) => {
//   nums.forEach((num, idx) => {
//     if (num % 2 !== 0) {
//       nums.splice(idx, 1);
//     }
//   });
//   return nums;
// }

// console.log(onlyOdds(numbers));
// console.log(onlyOdds);

// let arr = [{a: 'foo'}, {b: 'bar'}, {c: 'baz'}];
// let arr2 = [...arr];
// let arr3 = arr.slice(0);
// arr[0].a = "raddiii get it?";
// let arr4 = Object.assign([], arr);

// console.log(arr4);

// console.log(arr4 === arr); // false
// console.log(arr4[0] === arr[0]); // true 

// console.log(arr[0] == arr2[0]); // true 
// console.log(arr2 == arr3); // false



// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// Difference of two
// The objective is to return all pairs of numbers from a given array of numbers
// that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.
// The order of the numbers in the input array should not matter.

// console.log(differenceOfTwo([1, 2, 3, 4]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([4, 1, 2, 3]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// //  [[1, 3]]
// console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // [[1, 3], [3, 5], [4, 6]]
// console.log(differenceOfTwo([2, 4]));
// // [[2, 4]]
// console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// // []


// input: array of numbers
// output: array of subarrays

// Rules: 
// - all numbers in input array are unique, appear only once in array
// - result should be in ascending order
// - output elements have a difference of 2
// - if no two numbers have exact difference of 2, return empty array

// Data Structure: 
// [4, 3, 2, 1] => [[1, 3], [2, 4]]

// Algorithm: 
// iterate over input array 
// ... set a variable to hold current value
// ... set a variable `outputArray` to empty array
// ... 


// Implement a function that calculates the sum of numbers inside of a string.
// Example: "L12aun3ch Sch3oo45l" === 63

// You can expect that the string will include only non-negative numbers.

// console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

// input: string
// output: number (sum of numbers)

// rules: 
// .. input includes only non-negative numbers
// .. if consequative characters are numbers, consider them one number

// algorithm: 
// - set a sum variable to 0
// - set a digitString to `0123456789';
// - iterate over string 
// - if current character is included in `digitsString` 
// -- set `currentChar` variable to current idx 
// --- while the next character in the iteration is included in the digitsString, append it to `currentChar`
// -- coerce currentChar to number and add to `sum`
// return `sum`


function sumOfNumbers(str) {
  let sum = 0; 
 let numStr = "";
 for (let idx = 0; idx < str.length; idx +=1 ) {
   let char = str[idx];
   if (!Number.isNaN(Number(char))) {
     numStr += char;
   } else {
     sum += Number(numStr)
     numStr = ""
   }
 }
  return sum;
}


// return `sum`

// let nested = [[1, 2], [7]];
// let copy = nested.slice();

// console.log(nested[0] === copy[0]);
// nested[1] = 5; // reassigned, new object with new reference pointing to different data, therefore only reflected in nested 
// nested[0][2] = 10; // same object, but mutated nested object by adding another element at index 2 of the first element of the array at index 0, since reference is still the same, it is reflected in both nested and copy
// console.log(nested);
// console.log(copy);


let result = [ [[1], [2], [3], [4]], [ ['a'], ['b'], ['c']] ].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
}); 
console.log(result); // [undefined, undefined]


let obj = {
  a: 1, 
  b: 2,
}

let obj2 = obj;



let func1 = function () {
  return (foo) => foo;
}

let func2 = (func1) => console.log(func1);

console.log(func2(func1()("this")));


function callback(num) {
  return num;
}

let filteredArray = [0, 1, 2].filter(num => num); 
console.log(filteredArray);