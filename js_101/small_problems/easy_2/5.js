// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt("Enter the first number: ");
let firstNumber = Number(readline.question());
prompt("Enter the second number: ");
let secondNumber = Number(readline.question());

prompt(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
prompt(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23