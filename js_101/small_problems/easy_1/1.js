//refactor
function isnitItOdd(int) {
  return Math.abs(int) % 2 === 1;
}
//my initial solution

// function isnitItOdd(int) {
//   let absInt = Math.abs(int);
//   if (absInt % 2 !== 0) {
//     return true
//   }
//   return false
// }
console.log(isnitItOdd(2));
console.log(isnitItOdd(5));
console.log(isnitItOdd(-17));
console.log(isnitItOdd(-8));
console.log(isnitItOdd(0));
console.log(isnitItOdd(7));