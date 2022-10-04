// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// input: number
// output: number

// data structure: array of multiples of 3 and 5

// algorithm: 
// take number from argument and decrement it until it's equal to 1
// while decrementing check whether each number is evenly divisible by 3 or 5 
// if it's evenly divisible by either one, push into an array
// take the resulting items of the array and add them together for the output

// Note: rework solution without using the unnecessary multiples array

function multisum(number) {
  let multiples = [];
  let sum;
  while (number > 1) {
    if (number % 3 === 0) {
      multiples.push(number);
    } else if (number % 5 === 0) {
      multiples.push(number);
    }
    number -= 1;
  }
  return sum = multiples.reduce((a, b) => a + b, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168