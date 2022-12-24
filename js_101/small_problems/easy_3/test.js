/*
Explain why line 12 below logs `A sentence is a set of words put together with meaning.` rather than `Asentenceisasetofwordsputtogetherwithmeaning.`. What does this demonstrate about what happens on line 2?
*/

function squash(string) {
  string = string.replaceAll(' ', '');
}

let sentence = "A sentence is a set of words put together with meaning.";
squash(sentence);

console.log(sentence); // => A sentence is a set of words put together with meaning.
