let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleAtIndex(numbers) {
  let doubledAtIndex = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentIndex = numbers.indexOf(numbers[counter]);
    if (currentIndex % 2 !== 0) {
      doubledAtIndex.push(numbers[currentIndex] * 2);
    } else {
      doubledAtIndex.push(numbers[currentIndex]);
    }
    counter += 1;
  }
  return doubledAtIndex;
}

console.log(doubleAtIndex(myNumbers));
console.log(myNumbers);