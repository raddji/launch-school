// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// input number(integer) 
// input is a number
// input is > 0

// output number:
// sum or product inclusive of last number

// Problem: add all consecutive numbers up to input number inclusive
// Data structure: array 
// if input = 5, array = [1, 2, 3, 4, 5] 

// Algorithm: 
// 1. take input from user
// 2. make sure it's a number
// 3. make sure it's bigger than 0 
// 4. initiate an empty array
// 5. create a loop that breaks down the input number and on each iteration and adds the number to the array
// 6. ask user whether they want to add sum or product
// 7. if sum, add each number in the array to find out the sum
// 8. else if product, multiply each number to find the product

const readline = require('readline-sync');

const prompt = (message) => {
  console.log(`=> ${message}`);
}

prompt('Please enter an integer bigger than 0: ');
let number = Number(readline.question());
let numArray = [];
if (number > 0 && number != NaN) {
  for (let index = 1; index <= number; index += 1) {
    numArray.push(index);
  }
  console.log(numArray);
} else {
  console.log('Try again! Enter an integer greater than 0: ');
}

prompt("Enter 's' to find out sum or 'p' to find out product: ");
let sumOrProduct = readline.question();
if (sumOrProduct === "s") {
  let sum = numArray.reduce((a, b) => a + b);
  console.log(`The sum of the numbers between 1 and ${numArray[numArray.length - 1]} is ${sum}`);
} else if (sumOrProduct === "p") {
  let product = numArray.reduce((a, b) => a * b);
  console.log(`The product of the numbers between 1 and ${numArray[numArray.length - 1]} is ${product}`);
}

prompt('Thank you for using this program!');