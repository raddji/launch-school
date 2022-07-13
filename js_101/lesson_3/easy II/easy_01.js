// eslint-disable-next-line max-len
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your important pet dinosaur.";
console.log(advice.replace(/important/g, 'urgent'));

// const regex = /important/ig;
// console.log(advice.replaceAll(regex, 'urgent'));