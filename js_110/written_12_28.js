let name = "nina";

function outer() {
  let name = "jill";

  function capitalize() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return capitalize();
}

let capitalizedName = outer();
console.log(capitalizedName);
console.log(name);


////////

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a); // reference error, because a is only visible in the local scope of the function 

//////////

let animal = "dog";

const speak = (animal) => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
}

speak();
speak(animal);


///////

let players = [["Joe", 25], ["Mandy", 31], ["John", 18], ["Mark", 28]];
let lastYearsTeam = players.slice();

players.splice(2, 1);
// players: [["Joe", 25], ["Mandy", 31], ["Mark", 28]]
// lastYearsTeam: [["Joe", 25], ["Mandy", 31], ["John", 18], ["Mark", 28]]

players.forEach(player => player[1] += 1);
// players: [["Joe", 26], ["Mandy", 32], ["Mark", 29]]
// lastYearsTeam: [["Joe", 26], ["Mandy", 32], ["John", 18], ["Mark", 29]]

players.push(["Alina", 33]);
// players: [["Joe", 26], ["Mandy", 32], ["Mark", 29], ["Alina", 33]]
// lastYearsTeam: [["Joe", 26], ["Mandy", 32], ["John", 18], ["Mark", 29]]

console.log(lastYearsTeam);
console.log(players);

// any operations that mutate the outer array will not affect the shalloq copy, 
// but operations on the nested arrays will affect

///////////////

function anyNegatives(arr) {
  return arr.forEach(num => {
    if (num < 0) return true;
  });
}

let numbers = [1, 2, 3, -5, 4];

if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}

let name = "nina";

function outer() {
  let name = "jill";

  function capitalize() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return capitalize();
}

let capitalizedName = outer();
console.log(capitalizedName);
console.log(name);

// inner nested scope can access outer scope

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!"); // !!! right side get evaluated and affects global `greeting`, before it is reassigned and starts pointing to a new object; reassignment, mutation happens here
  return arr;
}

console.log(test(greeting)); // 2
console.log(greeting); // ['Hello', 'World'];

//// Explain the output and the map function

let arr = [1, 2, 3, 4].map(num => {
  return 'hi' });
console.log(arr);

/* 
** jkhsdhasdkasj

*/ 

