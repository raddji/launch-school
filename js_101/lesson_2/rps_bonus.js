/* eslint-disable complexity */
const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];

let computerScore = 0;
let playerScore = 0;
const MAX_SCORE = 3;

function playerWins() {
  prompt('Player won!');
  playerScore += 1;
  prompt(`Player score is: ${playerScore}`);
}
function computerWins() {
  prompt('Computer won!');
  computerScore += 1;
  prompt(`Computer score is: ${computerScore}`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`Player chose: ${playerChoice}, computer chose: ${computerChoice}`);

  if ((playerChoice === 'r' && (computerChoice === 'scn' || computerChoice === 'l')) ||
      (playerChoice === 'p' && (computerChoice === 'r' || computerChoice === 'sp')) ||
      (playerChoice === 'sc' && (computerChoice === 'p' || computerChoice === 'l')) ||
      (playerChoice === 'l' && (computerChoice === 'sp' || computerChoice === 'p')) ||
      (playerChoice === 'sp' && (computerChoice === 'sc' || computerChoice === 'r'))) {
    playerWins();
  } else if ((computerChoice === 'r' && (playerChoice === 'sc' || playerChoice === 'l')) ||
      (computerChoice === 'p' && (playerChoice === 'r' || playerChoice === 'sp')) ||
      (computerChoice === 'sc' && (playerChoice === 'p' || playerChoice === 'l')) ||
      (computerChoice === 'l' && (playerChoice === 'sp' || playerChoice === 'p')) ||
      (computerChoice === 'sp' && (playerChoice === 'sc' || playerChoice === 'r'))) {
    computerWins();
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  console.clear();
  console.log('WELCOME TO ROCK (r) PAPER (p) SCISSORS (sc) SPOCK (s) LIZARD (l) !');
  console.log(`\nScissors cuts Paper covers Rock crushes\n
  Lizard poisons Spock smashes Scissors\n
  decapitates Lizard eats Paper disproves\n
  Spock vaporizes Rock crushes Scissors.\n `);
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);

  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);
  if (playerScore === MAX_SCORE) {
    prompt(`Player won 3 out of 5!`);
    break;
  }
  if (computerScore === MAX_SCORE) {
    prompt(`Computer won 3 out of 5!`);
    break;
  }
  prompt('Would you like to play another game? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Enter a valid answer: "y" or "n" ');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break;
}