
function multiply(num1, num2) {
  console.log("Welcome to the multiplier!");
  let rSync = require('readline-sync');
  num1 = rSync.question("Enter the first number: ");
  num2 = rSync.question("Enter the second number: ");

  return Number(num1) * Number(num2); 
}

console.log(multiply(7, 8)); // 56
