// What does this code print and why?

function replace(str, value) {
  // does this mean let str = "argument value";
  
  // let str = "Hey";
  while (true) {
    break;
  }

  str = value;
  // str = "Hello";
}
// greet still = "Hey";

let greet = 'Hey!'
replace(greet, 'Hello')
// let greet = "Hey"
// greet (inside function) = "Hello"
// global greet still = "Hey"

console.log(greet);


/// variable scope
/*
This code demonstrates two things. The first is that inner scope can access outer scope variables. The second, and less intuitive, concept is that you can change variables from an inner scope and have that change affect the outer scope. For example, when we re-assigned the variable in the inner scope with a += 1, that reassignment was visible in the outer scope. 
*/

let a = 1;         // outer scope variable

function logA() {
  console.log(a);  // => 1
  a += 1;          // a is reassigned to a new value
}

logA();
console.log(a);   // => 2  "a" was re-assigned in the inner scope