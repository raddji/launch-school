// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// input: string
// output: new string 

// rules: collapse any multiple consecutive characters into single character 

// data structure: 
// "aabbcc" => "abc"
//  012345



// algorithm/ data structure: 
// split string to an array of characters 
// iterate over array, if first character same as next character, remove next character
// return array

function crunch(str) {
  
  
  return arr;
  
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""