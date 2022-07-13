// eslint-disable-next-line max-len
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let array = [1, 2, 3, 4, 5];
console.log('original array: ', array);
array.splice(2, 1); // remove one element at starting at index 2
console.log('after removing array[2]: ', array);