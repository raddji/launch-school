let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}


// // mutating original array solution
// function doubleNumbers(numbers) {
//   let counter = 0;
//   while (counter < numbers.length) {
//     let currentNum = numbers[counter];
//     numbers[counter] = currentNum * 2;
//     counter += 1;
//   }

//   return numbers;
// }

console.log(doubleNumbers(myNumbers));
console.log(myNumbers);