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
// set `numArr` to empty array
// use a for loop to determine length of output string
// iterate over `numArr` 
  // if at an even character place add '1'
  // if at an odd character place add '0'
// return 


function stringy(num) {
  let value = '';
  let numArr = [];

  for (let idx = 0; idx < num; idx += 1) {
    numArr.push(idx);
  }

  numArr.map((num, idx) => {
    if (idx % 2 === 0) {
      value += "1";
    } else if (idx % 2 === 1) {
      value += "0";
    }
  });
  return value;
}



console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"