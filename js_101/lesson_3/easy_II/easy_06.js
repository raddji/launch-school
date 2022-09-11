let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newArray = [];
flintstones.forEach((element) => {
  newArray = newArray.concat(element);
});
console.log(newArray);

// flintstones = flintstones.reduce((accumulator, element) => {
//   return accumulator.concat(element);
// }, []);
// console.log(flintstones);

// flintstones = [].concat(...flintstones);
// console.log(flintstones);

// flintstones = flintstones.flat();
// console.log(flintstones);