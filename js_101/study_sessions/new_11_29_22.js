let something = []; // line 1
let somethingElse = ''; // line 2
if (something === somethingElse) { // line 4
console.log("TV");               // line 5
} else if (something == somethingElse) { // line 6
console.log("Radio");                   // line 7
} else { // line 8
console.log("Other"); // line 9
} // line 10

// The output of the code snippet logs the string "Radio" to the console, because when using the loosely equal operator it coerces the reference array object of the variable `something` into an empty string and since the variable `somethingElse` is also assigned to an empty string, the if / else condition evaluates to true, therefore the if/else clause executes and the console method prints 'Radio' to the console

console.log([1, 2, 3].filter(num => 'hi'));
// the string 'hi' evaluates to true, therefore for each iteration, the callback function will evaluate the current element to true and append it to the new array
// can you explain the filter method in detail? 

// the array reference calls the filter method with a call back function passed in as an argument; filter passes in each number value from the calling array 
// a copy of each number value is assigned to the parameter `num`
// on each iteration the callback function will return the string value of `hi`
// because filter evaluates `hi` to true, the element is selected and added on to the new array
// filter returns a reference of a new array with the selected elements
// filter does not mutate the original array

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
On line 23, a variable `foo` is declared and initialized to a reference to a object with property and string value pairs.

On line 28, a variable 'qux' is declared and initialized to string value.

on line 35, the function bar is called with the referenced object `foo` and a value og `qux` passed in as argument.

A copy of the reference of foo is assigned to the parameter argument1. argument1 is now pointing to the same object as foo since they store the same reference.
The value of qux is assigned to parameter argument2. 

On line 31, the value of  property 'a' of referenced object argument1 is reassigned to the string value of 'hi'.
argument1 uses the dot notation to access the value of property 'a' and ressigns it to the string value of 'hi'.

On line 32, the value of argument2 is reassigned to the string value of 'hi'.

ON line 37, the console logs the value of foo of property a as the value 'hi' because both variable foo and argument are pointing to the same object. The reassigment on line 31 mutates the object and the mutation is refect in both variables. 

On line 38, the console logs the value of qux as hello.
Since qux is being passed in as a value to the function bar, anything done in the function does not effect or change the value of the varaible being passed in which in this case is qux.

The code demonstrates the concept of pass by reference and pass value.
*/