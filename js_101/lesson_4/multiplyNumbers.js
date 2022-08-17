let myNumbers = [1, 4, 3, 7, 2, 6];

function multiplyNums(numbers, multiplierNum) {
  let multipliedNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];

    multipliedNums.push(currentNum * multiplierNum);
    counter += 1;
  }

  return multipliedNums;
}

console.log(multiplyNums(myNumbers, 3));