// Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

/*

input: string
output: string 

rules: output string has all input words capitalized EXCEPT if the word is enclosed in quotations

data structure: string -> array -> string

algorithm: 
  convert input to an array and save to variable `inputArr`
  create helper function capitalize() that takes a string as an argument and returns the argument capitalized 
  iterate over `inputArr`
    on each iteration transform the current element to a capitalized version of itself
  join `inputArr` back together 
  return `inputArr`

  NB: account for case when string is in quotations -> takes care of itself because a capitalized quotation ("") is still a quotation!!!
*/

function wordCap(str) {
  let inputArr = str.split(" ");
  let result = inputArr.map((el) => {
    return capitalize(el);
  });

  return result.join(" ");
}

function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'