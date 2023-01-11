

function getName(prompt) {
  const readline = require('readline-sync');
  return readline.question(prompt);
}

// console.log(getName('whats your name'));

let firstName = getName('What\s your first name? ');
let lastName = getName(`What's your last name? `);

console.log(`Hello, ${firstName} ${lastName}!`);