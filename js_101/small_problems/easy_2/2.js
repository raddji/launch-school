// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const readline = require('readline-sync');

function prompt(message) {
  return console.log(`=> ${message}`);
}

prompt('What is your name?');
let name = readline.question();
if (name[name.length - 1] === "!") {
  name = name.slice(0, name.length - 1);
  prompt(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  prompt(`Hello, ${name}.`);
  }
