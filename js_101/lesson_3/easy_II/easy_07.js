let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

// let propArray = Object.entries(flintstones);
// console.log(propArray);
// console.log(propArray[2]);

console.log(Object.entries(flintstones).filter(pair => 
  pair[0] === "Barney").shift());

// console.log(Object.entries(flintstones));
