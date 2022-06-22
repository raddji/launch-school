function factorial(number) {
  let result = 1; 
  for (let counter = number; counter > 0; counter -= 1) {
  result *= counter; 
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(6));