let numbers = [1, 2, 3];


function sumTwo(arr, target) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let jdx = 1; jdx < arr.length; jdx += 1) {
      if ((arr[idx] + arr[jdx]) === target) return [idx, jdx];
    }
  }
}

console.log(sumTwo(numbers, 4));



