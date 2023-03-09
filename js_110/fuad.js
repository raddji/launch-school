let arr1 = ['c', 'd', 'e'];
let arr2 = arr1
arr2 = ['h', 'i', 'j']

console.log(arr1);
console.log(arr2);


// On line 1 the variable arr1 is declared and initialized to a reference ['c', 'd', 'e']. On line 2 a variable `arr2` is declared and assigned to the reference of `arr1`. At this moment both variables point to the same object in memory. 
// On line 3, `arr2` is reassigned to reference the object `[‘h’, ‘i’, ‘j’]` and now points to a new place in memory. Therefore, line 5 logs `['c', 'd', 'e']` to the console, and line 6 logs `'['h', 'i', 'j']`. The concepts demonstrated are assignment and reassignment of object variables. 


let g = ['one', 'two', 'three'];
let h = g;
h[1] = 'four';

console.log(g);
console.log(h);

/* 

On line 1 a variable `g` is declared and assigned to the array `['one', 'two', 'three']`. On line 2 a variable `h` is declared and assigned to the same reference as `g`. Both variables point to the same array object in memory. 
On line 3, the element at index 1 of the array referenced by `h` is reassigned to a new string value of `'four'`. The array is mutated and the change is reflected in both variables referencing the same array. Therefore, the console.log method on line 15 logs `['one', 'two', 'three']` as well as the console.log method on line 16.

*/