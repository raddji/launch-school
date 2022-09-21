// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

// input string
// output string

function repeat(str, repeatTimes) {
  let repeatString = '';
  if (str === '' || str === 'undefined') {
    console.log('inavlid entry! enter a string.');
  } else {
    while (repeatTimes > 0) {
      repeatString += repeatString.concat(str);
      // repeatString += str;
      repeatTimes-= 1;
    }
    return repeatString;
  }
}

console.log(repeat('Love you! ', 3));
