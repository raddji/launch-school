// 1. ask user to enter length and width of room in meters
// 2. log the area of the room both square meters and  square feet
// 3. input: string
// 4. output: number

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter room length in meters: ');
let roomLength = Number(readline.question());
// console.log(typeof roomLength);
prompt('Enter room width in meters: ');
let roomWidth = Number(readline.question());
console.log(`The area of the room is ${roomLength * roomWidth} square meters (or ${(roomLength * roomWidth) * 10.7639} square feet)`);
