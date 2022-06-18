// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform. 
// Perform the operation on the two numbers. 
// Print the result to the terminal.
// Ask user if they want to perform another operation.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let number1 = Number(readline.question());
prompt("What is the second number?");
let number2 = Number(readline.question());
console.log(`${number1} ${number2}`)

console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;
  switch (operation) {
  case "1": 
    output = number1 + number2;
    break;
  case "2":
    output = number1 - number2;
    break;
  case "3": 
    output = number1 * number2;
    break
  case "4": 
    output = number1 / number2;
    break;
  }
//readline.question() always returns a string
prompt(`The result is ${output}`);

let nextOperation = readline.question("Would you like to perform another operation? Type Y/n");

if (nextOperation === "Y".toLowerCase()) {
  prompt("What's the first number?");
  let number1 = Number(readline.question());
  prompt("What is the second number?");
  let number2 = Number(readline.question());
  console.log(`${number1} ${number2}`)

  console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();

  switch (operation) {
    case "1": 
      output = number1 + number2;
      break;
    case "2":
      output = number1 - number2;
      break;
    case "3": 
      output = number1 * number2;
      break;
    case "4": 
      output = number1 / number2;
      break;
    }
  
  prompt(`The result is ${output}`);
}
