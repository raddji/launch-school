const readline = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.select);
let selectedLanguage;
let language = readline.question();

function checkLanguage(lang) {
  if (lang === '1') {
    selectedLanguage = 'en';
  } else {
    prompt(MESSAGES.validLanguage);
    language = readline.question();
    checkLanguage(language);
  }
}

checkLanguage(language);

let welcome = MESSAGES[selectedLanguage].welcome;
let firstNumber = MESSAGES[selectedLanguage].firstNumber;
let secondNumber = MESSAGES[selectedLanguage].secondNumber;
let anotherOperation = MESSAGES[selectedLanguage].newOperation;
let invalidInput = MESSAGES[selectedLanguage].invalidNumber;
let goodbye = MESSAGES[selectedLanguage].goodbye;


prompt(welcome);

while (true) {

  prompt(firstNumber);
  let number1 = (readline.question());

  while (invalidNumber(number1)) {
    prompt(MESSAGES[selectedLanguage]['invalidNumber']);
    number1 = readline.question();
  }

  prompt(secondNumber);
  let number2 = (readline.question());

  while (invalidNumber(number2)) {
    prompt(invalidInput);
    number2 = readline.question();
  }

  prompt(MESSAGES[selectedLanguage]['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}`);

  prompt(anotherOperation);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') {
  prompt(goodbye);
  break;
  }
}
