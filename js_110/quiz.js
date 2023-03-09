// let bar = function () {
//   return (foo) => foo;
// };

// let qux = (bar) => console.log(bar);

// qux(bar()("APM"));


// function nameOrdering(list) {
//   return list.reverse();
// }

// const names = ["Jane", "Adam", "Susan", "Larry"];

// nameOrdering(names);

// console.log(names);


/////////////////////



// function louder(spark, bee) {
//   let sparkCopy = spark;

//   for (let i = 0; i < 2; i += 1) {
//     let upper = sparkCopy.toUpperCase();
//     spark += upper;
//   }

//   return spark;
// }

// let origin = {
//   spark: "tinder",
//   bee: "bumble",
// };

// origin = louder(origin.spark);
// console.log(origin);


// //////


// function snacks(value) {
//   let tasty = "chips";

//   let foo = {
//     healthy: "apples",
//     tasty: tasty,
//     protein: "beef jerky",
//   };

//   let bar = foo;

//   return bar;
// }

// snacks();


// ////


// let bar = function () {
//   return (foo) => foo;
// };

// let qux = (bar) => console.log(bar);

// qux(bar()("APM"));

/*
On line 1 a `bar` function expression is defined; it returns an anonymous function which takes one parameter and returns it. 

On line 5 a `qux` arrow function expression is declared and defined with one parameter `bar` (which just happens to have the same name as the variable on line 1); `qux` returns a call to console.log with the `bar` argument passed into the console.log method. 

On line 7, the `qux` function is called like so `qux(bar()("AMP"));`; like mentioned earlier it takes one argument, and in this case in order to evaluate its argument JavaScript first evaluates the expression of calling the `bar()` function. Because when we call `bar()` it returns its anonymous function, we also chain the argument that the anonymous function expects in brackets like so `bar()('AMP')`. `bar` returns the value of the argument passed into the anonymous function and that is what ends up being the value of the argument that `qux` is called with on line 7. `qux(bar()("AMP"));` becomes `qux("AMP");` and that is what the console.log, which is part of qux's definition, prints, because it takes the same argument as what is passed into `qux`.

I was wrong about `qux` evaluating to `undefined`. `qux` is a function expression so the variable `qux` evaluates to `[Function: qux]`. The return value of console.log does not play a role here. 

/*
- set `inputArray` to empty array
- iterate over input characters 
  - append all substring combinations to `inputArray`
- set `oddNums` array to []
- iterate over `inputArray` array and find elements that can be evaluated to odd numbers
- add odd numbers to `oddNums` array
- return `oddNums` array length






