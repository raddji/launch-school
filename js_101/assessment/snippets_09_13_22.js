[[1, 2],[3, 4]].map((arr) => console.log(arr[0]));

// ----

let pets = {
  jerry: {species: "cat", age: 3},
  luna: {species: "dog", age: 5},
  goldin: {species: "fish", age: 1}
};

function incrementAge(animals) {
  Object.values(animals).map(animal => {
    animal.age += 1;
  });
}

incrementAge(pets);
console.log(pets);

// ----

[1, 2, 3].filter((num) => {
  num + num;
});

// ----

let b = "b";
let abc = ["a", b, "c"];
b = "barbados";
console.log(abc);

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);