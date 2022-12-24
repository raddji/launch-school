// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// input: number
// output: string

// rules: 
// number must be bigger than 0
// output always starts with 1, alternating 1 => 0 ('10101010')
// output's length same as input integer

// data structure: 3 => '1' + '0' + '1' => '101'

//                      [0,    1,    2].length => 3 

// algorithm: 
// set a variable `value` to an empty string to hold the output
// use a for loop to determine length of output string
// if at an even character place add '1'
// if at an odd character place add '0'
// return 

function stringy(stringSize) {
  let value = '';
  
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"