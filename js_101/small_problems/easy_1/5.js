// create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// input: string
// output: number

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is your bill amount?');
let bill = Number(readline.question());
console.log(`Your bill amount is: $${bill}.`);
prompt('What percentage tip would you like to leave?');
let tipPercent = Number(readline.question())/ 100;
let tipAmount = (bill * tipPercent);
prompt(`The tip is: $${tipAmount}`);
prompt(`The total bill is: $${bill + tipAmount}`);

