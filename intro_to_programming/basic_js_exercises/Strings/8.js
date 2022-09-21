// Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

// input string
// output boolean

// rules: empty space has a utf-8 char code, therefore it's considered a character

function isBlank(str) {
  // let emptyChar = ' ';
  // if (str.length === 0 || str.includes(emptyChar)) {
  //   return true;
  // } else {
  //   return false;
  // }

  return str.trim().length === 0;

}


console.log(isBlank('mars')); // false
console.log(isBlank(' '));   // true
console.log(isBlank(''));     // true
