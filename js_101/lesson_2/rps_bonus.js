const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose: ${playerChoice}, computer chose: ${computerChoice}`);

  if ((playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) || 
      (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) || 
      (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) || 
      (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) || 
      (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
        prompt('You won!');
      } else if ((computerChoice === 'rock' && (playerChoice === 'scissors' || playerChoice === 'lizard')) || 
      (computerChoice === 'paper' && (playerChoice === 'rock' || playerChoice === 'spock')) || 
      (computerChoice === 'scissors' && (playerChoice === 'paper' || playerChoice === 'lizard')) || 
      (computerChoice === 'lizard' && (playerChoice === 'spock' || playerChoice === 'paper')) || 
      (computerChoice === 'spock' && (playerChoice === 'scissors' || playerChoice === 'rock'))) {
        prompt('Computer won!');
      } else {
        prompt("It's a tie!");
      }
}
while (true) {
  console.clear()
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readline.question();

  while(!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);

  prompt('Would you like to play another game? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Enter a valid answer: "y" or "n" ');
    answer = readline.question().toLocaleLowerCase();
  } 

  if (answer[0] !== 'y') break;
}