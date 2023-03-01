// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObject = {};
// let indexArray = [];

flintstones.forEach((name, index) => {
  flintstonesObject[name] = index;
});


// for (let idx = 0; idx < flintstones.length; idx += 1) {
//   indexArray.push(idx);
//   flintstonesObject[flintstones[idx]] = indexArray[idx];
// }

// console.log(indexArray);
console.log(flintstonesObject);