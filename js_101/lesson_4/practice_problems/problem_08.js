let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObject = {};
flintstones.forEach((elem, idx) => {
  flintstonesObject[elem] = idx;
});

console.log(flintstonesObject);

// input array
// output object

// 1. find out index numbers, and values at each index
// 2. map each index to key and value to value in new object output
