// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

// input string
// output string 

// rules: split string into words delineated by spaces
// capitalize the first character of each word

let titleString = "launch school tech & talk";
let splitStringArray = titleString.split(" ");
let capitalized = [];

for (let i = 0; i < splitStringArray.length; i += 1) {
  let word = splitStringArray[i];
  capitalized.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capitalized.join(' '));
