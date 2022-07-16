let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(item => Number.isInteger(item));
}

console.log(findIntegers(things));