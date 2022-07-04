// ask the user for their move
// the computer will make a move
// display who won/the result
// decide whether to continue or end the game

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose: ${choice}, computer chose: ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') || 
      (choice === 'paper' && computerChoice === 'rock') || 
      (choice === 'scissors' && computerChoice === 'paper')) {
        prompt('You won!');
      } else if ((choice === 'scissors' && computerChoice === 'rock') || 
                (choice === 'rock' && computerChoice === 'paper') || 
                (choice === 'paper' && computerChoice === 'scissors')) {
        prompt('Computer won!');
      } else {
        prompt("It's a tie!");
      }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while(!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Would you like to play another game? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Enter a valid answer: "y" or "n" ');
    answer = readline.question().toLocaleLowerCase();
  } 

  if (answer[0] !== 'y') break;
}