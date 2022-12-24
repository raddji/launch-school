/*
- variables as pointers 
- side-effects *
- pass by reference and pass by value 
- variable scope
- testing for implicit type coercions **
- I can show you my PEDAC process
*/

// There are a couple of situations in which JS will do an implicit type cast. 
// Equality checks ==
// Inequality checks, >, >=, <, <=
// Strings, Numbers, Booleans, Null/Undefined, Objects

// Obj1 == Obj2

// The way that implicit type casting is going to work: 
// When JS encounters two operands that are of different types, it will first try to coerce one or both of the operands into the same type.  
// How do we figure out what that empty array is being coerced into? 

// console.log([] == 0); // true
// The array is coerced into an empty string, '' and then compared with 0 again. Because they aren't the same data type, the empty string will get coerced into a number, 0. Now that they're the same data type, they can be compared and will log `true`.

// console.log([] == true);
// if ([]) { console.log(`empty array is truthy`) }

// An empty array on its own is truthy. 
// Because of the loose equality, JavaScript is converting either the empty array, the boolean value or both to some final data type that it can use to compare the two values - that data type will be the same. (And is likely either a number or a string)

// console.log(Number([])); 
// console.log(String([]));
// console.log(!![]);

// ---------------------------------------
// Side-effects

// Functions are said to have side-effects. A side effect occurs under one of five circumstances: 
// - The function reassigns a variable in an outer scope. 
// - The function mutates an object that was created in an outer scope. 
// - The function accesses system resources (reading/writing files, console ect..)
// - The funciton raises an exception without handling it (with a try/catch). 
// - The function (1) invokes another function (2) whose side effects are observable outside of the first function's invocation. 

// Reassigns a variable 
let message = 'hello';

function changeMessage() {
  message = `${message} ${message}`;
}

console.log(message);
changeMessage();
console.log(message);
console.log();

// Avoid this with variable shadowing and returning 
let message2 = 'hello';

function doubleMessage(message2) {
  return `${message2} ${message2}`;
}

console.log(message2);
message2 = doubleMessage(message2);
console.log(message2);

// The side-effect is that we're reassigning the value of an outer-scoped variable. The fix is to use variable shadowing or just using a parameter within the function by passing the outer-scoped variable as an argument and returning the desired value (as opposed to overwriting the outer-scoped variable with the desired value)

///////////////////////////////////////////////////////////////////
// 9 PM session

/*
- variables as pointers*
- side-effects 
- pass by reference and pass by value
- variable scope
- testing for implicit type coercions ***
- I can show you my PEDAC process****
*/

// console.log([] == true); // false
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number([3]));
// console.log(Number([3, 4]));
// console.log(Number([]));

// console.log([] == Number(true));
// console.log(Number([]) == 1);
// console.log(0 == 1); // false

// When faced with values of two different types, the loose equality operator will coerce EITHER operand until it gets values of the same type on either side. 

// Steps for determining lose equality: x == y   (section 7.2.15)
// If x and y are the same type                  (return x === y)
// Checks if x is `null` and if y is `undefined` (defined to return `true`)
// Checks if x is `undefined` and if y is `null` (defined to return `true`)
// If x is a number and y is a string            (return x == Number(y))
// if x is a string and y is a number            (return Number(x) == y)
// if x is a BigInt and y is a string            (complicated number of steps)
// if x is a string and y is a BigInt            (see above)
// if x is a boolean                             (return Number(x) == y)
// if y is a boolean                             (return x == Number(y))
// if x is primitive and y is object             (return x == toPrimitive(y))
// if x is object and y is primitive             (return toPrimitive(x) == y)
// if x is bigInt and y is number (or reversed)  (complicated number of steps)
// return false

// For arrays, `toPrimitive` will try to coherse to a number. 

// so, for [] == true
// => [] == Number(true) => [] == 1
// => [] == 1            => toPrimitive([]) == 1
// => 0 == 1             => false

// for [] == 0
// => toPrimitive([]) == 0 
// => 0 == 0  =>  true

// ----------------------------------------

// https://www.notion.so/SPOT-Wiki-b58ff38ab84440bdb96797e59ee5fd34

// Write a function that takes an array of consecutive (increasing) letters as input and returns the missing letter in the array. 

// You will always get a valid array and there will always be exactly one letter missing. The length of the array will always be at least two. The array will always contain letters of only one case. 

// Test cases should all print `true`
console.log(missingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(missingLetter(['O', 'Q', 'R', 'S']) === 'P');

/* PEDAC
  PROBLEM 
    input is an array of sequential characters 
    output is a string representing the missing character in the array
    you will always be given a valid array
    there will always be exactly one letter missing 
    the length of the array will always be at least two 
    the array will always contain letters of one case
    the characters will be in ascending order
    assume that the missing letter will not be at the start or end of the array 
    assume the array inputs will not be a consistent length
    assume elements of input array will always be single-letter strings

  Notes: 
    - I know that my case will be consistent, so I can rely on sequential character codes. The missing code in a sequence will be my missing character. So, I can rely on math. 

  ALGORITHM 
    declare `missingChar` and init to empty string
    begin iteration over input array (starting at second element)
      declare `charCode` and init to the code of the current character
      delcare `prevCharCode` and init to the code of char at i - 1
      declare `difference` and init to `charCode` - `prevCharCode`

      if `difference` is greater than `1` 
        reassign `missingChar` to the char code at `charCode` - 1
    end iteration 

    return `missingChar`
*/

function missingLetter(charArr) {
  let missingChar = '';

  for (let i = 1; i < charArr.length; i++) {
    const charCode = charArr[i].charCodeAt(0);
    const prevCharCode = charArr[i - 1].charCodeAt(0);
    const difference = charCode - prevCharCode;

    if (difference > 1) {
      missingChar = String.fromCharCode(charCode - 1);
    }
  }

  return missingChar;
}