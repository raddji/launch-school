// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// Return true or false depending on each result.

function includesThree(arr) {
  arr.forEach((num) => {
    if (num === 3) {
      console.log(true);
    }
    console.log(false);
  });
}

console.log(includesThree(numbers1));
