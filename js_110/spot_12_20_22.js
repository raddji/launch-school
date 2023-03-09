// describe what this code will output and why


// let age = 25;

// function addOneYearToAge(ageIn) {
//   let age = ageIn + 1;
//   return age;
// }

// console.log(age);
// console.log(addOneYearToAge(age));
// console.log(age);

/*
On line 4 a variable `age` is declared in the global scope and initialized to a value of 25

On line 6 a function `addOneYearToAge` is declared and passed in a parameter `ageIn`
Inside the function block a local variable `age` is declared and initialized to the value of the passed in parameter plus 1, 
and then returned

On line 11 the built in JavaScript method console.log is called on the `age` variable and it outputs 25 to the console, since `age` is a global variable, and the second `age` variable inside the function block is not visible to the rest of the program

On line 12 console.log is called and passed in the `addOneYearToAge` function which in turn is called with the global `age` variable passed in as an argument; it logs 26 to the console
On line 13 console.log is called again and passed in `age`, and once again it outputs 25 because the value of the global variable `age` has not been affected by anything the happens in the local scope of the function which contains a local `age` variable shadowing the global `age` variable

*/


// describe what this code will output and why
// -> bonus: identity each piece of code which has a return value

// let myVar = [[1, 2], [3, 4]].map(arr => {
//   return arr.map(num => num * 2);
// });

// console.log(myVar);

/*
The code outputs the referenced array of ` [[2,4], [6,8]];`
The nested array calls the map method. Each subarray is passed into the callback. The parameter `arr` is assigned a copy of the reference of each subarray on each iteration. 'arr` then calls the inner map method. The `num` parameter is assigned a copy of the number value. On each invocation of callback, the expression `num * 2` returns a new number to to the callback. On first invocation of the outer map callback, the each innovation of the inner callback returns values 2 and 4 to the inner map method which then map adds to a new array. The outer map callback returns [2, 4] to outer map which outer map append array to a new array. On the second invocation of the outer map callback, the inner map callback return the value of 6 and 8 to the inner map which inner map append to the new array. Outer map callback return the array [6,8] to the outer map, which outer map append to the new array and returns a reference to a new array of  [[2,4], [6,8]].


Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Ex)

/*
Problem
- input:  array of number  
          target number
          length of array will be 2 or greater

- output: indices of the two values in array

- find two different  items in the array that when add together gives the target value
- two values will always be different

examples
- if there is more than one answer then return the one that occurs
Data Structure
array, targetSum (number) => array of the indices

Algo
- iterate through the array to get the first number 
- SET `num1` an init to value of `nums` at inex `idxNum1`
- iterate through the array to get the second number starting the index of the first number 1
  - check if the sum of the first and the second is equal to the target sum 
  - return the array of the first and second indices
*/

function twoSum(nums, targetSum) {
  for (let idxNum1 = 0; idxNum1 < nums.length; idxNum1 += 1) {
    let num1 = nums[idxNum1];
    for (let idxNum2 = idxNum1 + 1; idxNum2 < nums.length; idxNum2 += 1) {
      let num2 = nums[idxNum2];
      if ( num1 + num2 === targetSum) {
        return [idxNum1, idxNum2];
      }
      }
    }

  }
console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
console.log(twoSum([2, 3, 1], 4)); // returns [1, 2]

