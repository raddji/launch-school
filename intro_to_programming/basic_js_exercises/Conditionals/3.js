// Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

function randomNum() {
  let randomNumber = Math.round(Math.random());
  // return randomNumber === 1 ? "Yes!" : "No.";
  return randomNumber ? "Yes!" : "No.";
}

console.log(randomNum());