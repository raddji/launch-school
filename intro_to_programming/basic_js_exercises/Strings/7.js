// Write a function that checks whether a string is empty or not. For example:

// input string
// output boolean

// rules: empty space has a utf-8 char code, therefore it's considered a character

function isBlank(str) {
  if (!str) {
    return true;
  } else {
    return false;
  }
  // return str.length === 0; easiest way to check the length of the string
}


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
