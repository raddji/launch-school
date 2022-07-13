// eslint-disable-next-line max-len
// Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
let numbers = [1, 2, 3, 4, 5];

console.log('returning reversed using slice: ', numbers.slice(0, numbers.length).reverse());
console.log(`original array: ${numbers}`);

// reverse using spread operator/sort without mutating original array

let reversedArray = [...numbers].sort((a, b) => b - a);
console.log(`reversed array with spread operator: ${reversedArray}`);
console.log(`original array: ${numbers}`);

// bonus reverse using forEach method without mutating

let newReversed = [];
numbers.forEach((number) => newReversed.unshift(number));
console.log(`newReversed with for Each: ${newReversed}`);
console.log('original numbers array', numbers);
