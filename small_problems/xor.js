// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// input: two arguments: strings, numbers, booleans, any type! 
// output: boolean

// rules: return boolean true if 1 of the arguments is truthy, 
// otherwise, return false 

// algorithm: 
// 1. if the first argument is truthy AND the second argument is truthy, return false 
// 2. if the first argument is truthy, AND the second argument is falsy OR if the first argument is falsy AND the second argument is truthy, return true
// 3. else return false


function xor(arg1, arg2) {
  if (arg1 && arg2) {
    return false;
  } else if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  }

  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

