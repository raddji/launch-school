// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// input: number
// output: negative of the input number

// rules: 
// if input is negative, return as is 
// if input is zero, return negative zero

// algorithm: 
// check if number is 0, return -0 if yes
// check if number is already negative, if yes return number
// check if number is positive, return negative of the number

function negative (num) {
  if (num === 0) {
    return -0;
  } else if (Math.sign(num) === -1) {
    return num;
  } else {
    return num * (-1);
  }
}