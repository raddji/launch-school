let arr = ["", false, null].filter(el => "hello");
console.log(arr);

//////////

let b = 2;

function test(a) {
  a = b;
  return a;
}

console.log(test(5));
console.log(b);
console.log(a);

///////////

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

//////

let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat("World!"); // ["hello", "world!"]
  return arr;
}

console.log(test(greeting));
console.log(greeting);

//////

let players = [["Joe", 25], ["Mandy", 31], ["John", 18], ["Mark", 28]];
let lastYearsTeam = players.slice();

players.splice(2, 1);
// players: [["Joe", 25], ["Mandy", 31], ["Mark", 28]]
// lastYearsTeam: [["Joe", 25], ["Mandy", 31], ["John", 18], ["Mark", 28]]
players.forEach(player => player[1] += 1);
// players: [["Joe", 26], ["Mandy", 32], ["Mark", 29]]
// lastYearsTeam: [["Joe", 26], ["Mandy", 32], ["John", 18], ["Mark", 29]]
players.push(["Alina", 33]);
console.log(lastYearsTeam);
console.log(players);

////

const emphasize = (str) => { str + "!!!" };

let word = emphasize("Hello");

if (word) {
  console.log(word);
} else {
  console.log("Goodbye");
}

/////

let pets = ["dog", "fish", "parrot"];
let myPets = pets;
console.log(myPets === ["dog", "fish", "parrot"]);
console.log([] == []);
console.log(myPets == ["dog", "fish", "parrot"]);

///

/*

function bar(array) {

return array;

}

let array = [1, 2, 3];

let newArray = bar(array);

console.log(array === newArray);

- /

/*

On `line 6`, the global variable `array` is declared and initialized to a reference to an array `[1,2,3]`

On `line 7` a global variable `newArray` is declared and initialized to the return reference of the`bar` function invocation

- /

// passed to a function and return a function

// pass by value

// pass by reference

// The function `bar` is invoked and the reference of the variable `array` is passed in as an argumnent

//inside the function parameter

// a local `array is declared and initialized to a copy of the reference of the global variable `array`

// since they the variables store the same reference they both point to the same array in memory