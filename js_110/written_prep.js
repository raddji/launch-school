// 1. What does the last line of the code evaluate to?

let arr = [1,2,3,4,5];
const k = `Don't change me`;
arr.map((n, k) => k = n*2);

// On the previous line the map method is called on the reference `arr` which points to an array of numbers; the map method performs a transformation based on the return value of its callback function, which in this case takes each element from the reference `arr` and assigns its value to the callback function’s argument `n`, the callback function takes a second argument `k` which is assigned the value of the index of argument `n`, and transforms the element by multiplying it by 2 and saving it in a new array
// Thus the last line evaluates to [2, 3, 6, 8, 10] - a reference to a new array.
// The variable `k` declared in the global scope on line 2 and initialized to the value of the string `Don’t change` is different than the declarative variable in function scope passed as argument `k` to the callback function of the map method and is not affected by the transformation performed by the map method


// 2. What is the value of goodStudents and why? (code walk through)

var students = [
  {name: 'Rana Deeb', gpa: 4.0},
  {name: 'Nicolas Hanout', gpa: 3.4},
  {name: 'bad student', gpa: 2.5}
];
const goodStudents = students.reduce((list, student)=>{
  if(student.gpa >3){
    list.push(student.name);
  }
  return list;
},[]);

// On line 14 a variable `students` is declared in the global scope and initialized to a reference of an array of objects
// On line 19 the constant `goodStudents` is initialized to the return value of the reduce method called on the `students` reference
// reduce is passed in a callback function as its first argument, which takes two parameters: `list` as the accumulator initialized to a reference of an empty array, and `student` which on each iteration is initialized as the reference to the current object passed in from the calling array, and on line 20 within the callback function the if condition checks whether the value at property `gpa` is greater than 3, and if the condition evaluates to true, the accumulator `list` calls the method push and passes in the value at property `name` of the student object to the `list` reference
// On the first iteration `gpa` at 4.0 evaluates to true, and on the second `gpa` at 3.4 evaluates as true, and the values of 'Rana Deeb' and 'Nicolas Hanout' are pushed to the `list` array reference
// `gpa` at 2.5 evaluates to false therefore it is not added to the `list` reference
// at the end of the iteration what is returned is a reference to the array `list` containing the values that fulfilled the condition of the callback function



// 3. Re-implement the previous code using only the Array methods map and filter instead of reduce

console.log(students.filter((student) => student.gpa > 3).map((student) => student.name));


// 4. List all the unique variables in this program and their scope, and explain the output of the program.
// list all the unique variables in this program and their scope, and explain the output of the program.

let x = 14;             
function foo(x) {
  if (x > 10)  {
    let x = 8;   // why the let keyword here? isn't it enough to just reassign x?         
    console.log(x);
  } else  {
    bar(x);
  }
}
console.log(x);  // 14
foo(x);          // 8     
console.log(x);  // 14
foo(6);  // throws a reference error because function `bar` ends up being called, however it has not been defined yet in the flow of the program
console.log(x); // 14 => the global variable `x` remains unaffected by anything that happens in the local scope of the `foo` function
            
function bar(y){           
  if  (y < 10)  {              
    x = 24;
  }
}

/* The unique variables in the program are on line 43, where global variable `x` is declared and initialized to the value of the number 14. Another unique variable is declared in the local scope of the function `foo` on line 44 as its parameter `x`, and it shadows the global `x`. The third unique variable in the program is passed in the local scope of the `bar` function defined on line 58 as the parameter `y`. 
*/

// What will this code return and why?

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/* 

This code will output the referenced array of [[2, 4], [6, 8]]
The nested array calls the map method on line 69. Each subarray is passed into map's callback function, and a map method is invoked on the subarray on line 70, where each element passed in to the subarray is passed into that map method's callback function on line 70; the callback takes the element and transforms it by multiplying it by 2, and returns it to an array copy where the map method returns each item transformation to

*/

// What is logged to the console and why?

let foo = {
  a: 'hello',
  b: 'world',
  };
  
  let qux = 'hello';

  function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
  }
  bar(foo, qux);
  console.log(foo.a);
  console.log(qux);

  // on line 15 the output to the console will be 'hi' 
  // lines 1 through 4 declare an object literal `foo` with properties `a and `b` set to two different string values; line 8 through 11 defines a function `bar` which takes two parameters, and inside the function body reassigns the values of the parameters; on line 12 the function is invoked and passed in the object reference `foo` and the variable `qux` which is initialized to a string, the reference to the object `foo` is copied and assigned to argument1, therefore argument1 now points to the same object in memory as `foo` 
  // inside the function block the value at property `a` is reassigned to `hi`, and since `argument1` points to the same reference object, the reassignment is reflected in `foo` as well
  // on line 16 the output will be 'hello'
// on line 12 we invoke the `bar` function and pass the string value of `qux` as the second argument; argument2 gets assigned to a new value of `hi` in the scope of the function and once the function is finished running any variables inside of it are discarded; therefore when we console.log `qux` on line 14, it still stores the value of the `qux` variable in the global scope, which is `hello`

//when a value is passed in as an argument, and the value is assigned to the parameter argument2. Whatever changes that is done  to the value of argument2 is is not reflected in the global variable qux. Since argument2 is storing a primitive it is not deeply linked to the global variable qux

let array1 = [1, 2, 3];
let array2 = array1;
let array3 =  [1, 2, 3];

let str = '1';
let str2 = str; //'1'
str = '2'
console.log(array2 === array1)
// array1[1] = 4;
// console.log(array2);

/*

demonstrates the concept of variables as pointers and the concept of mutation. 
array1 is declared and initialized to a reference to an array 
array2 is declared and initialized to a copy of the reference to array1
There array1 and arra2 are pointing to the same array in memory
the referenced object 

*/

// What will this code output?

let x = 3; 
if (x === 3)
  console.log('x is 3');
  console.log('x is an odd number');

  /* 
  The code will output `x is 3` to the console, after which it will also output undefined, which is the return value of the console.log built in JavaScript method. The second call of console.log will output `x is an odd number` to the console, which once again is the side effect of the console.log() function, and it will once again also output undefined which is the return value of the console.log() call.
  */


  let foo = {
    a: 'hello',
    b: 'world',
  };
  let qux = 'hello';
  
  function bar(argument1, argument2) { 
    argument1.a = 'hi'; 
    argument2 = 'hi';
    // return argument2;
  }
  bar(foo, qux)
  // qux = bar(foo, qux);
  console.log(foo.a);
  console.log(qux);
  
  /* 
  The console.log method on line 94 logs 'hi' 
  The console.log on line 95 logs 'hello'
  The variable `foo` is declared on line 81 and initialized to a reference to an object literal in the global scope
  Variable `qux` is declared and initialized to the string value `hello` on line 85
  On line 92 the `bar` function is invoked with the reference to the object `foo` and the string value of `qux` passed in as arguments 
  On line 88 parameter `arguement1`'s property value `a` is reassigned to a new string 
  On line 89 parameter `argument2` is reassigned a new string value 
  argument1 is pointting to the same object as the global variable `foo`, therefore when we reassign the property `a` of argument1 to a new value inside the function, now `foo.a` reflects the same change
  argument2 is passed a primitive value, which is immutable and not deeply linked to the global variable `qux`, therefore when it is reassigned inside the function to the value of `hi` it doesn't change the global variable `qux`

  ************ Explanation per intro book ***************:
  The program logs 'hi' and 'hello' The reason behind this is that objects are mutable; strings and other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates the foo by assigning its a property to a new value ('hi'). Therefore, the code on line 15 logs hi. On the other hand, line 10 reassigns the argument2 variable, but it doesn't mutate the string represented by qux. Thus, line 16 logs hello: the original value of the qux variable.
  
  */ 

  // Will this code cause an infinite loop? Why, why not?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
// The above code will produce an infinite loop. On line 1 we declare and initialize variable `counter` to the value of 0 in the global scope. A while loop starts on the following line and its conditional expression evaluates to true: it reassigns the value of `counter` to 1 on each iteration, which is a truthy value; 
//inside the loop clause the console.log method is invoked and passed in the value of `counter` as its argument, which gets logged to the console. On line 173 the global variable `counter`'s value is incremented/ reassigned and is now equal to 2. 
//On line 175 the if conditional expression, evaluates to false, since 2 is not greater than 2. When the if condition evaluates to false, the break statement inside the clause on line 176 is not executed and the loop does not end. Execution resumes with the first statement or expression after the if statement, without running the code in the clause. The loop becomes infinite as it goes back to the while conditional expression, evaluates to true, enters the while loop block and repeats the rest of the steps with no break to stop it. 


// Consider the following code: (Objects, intro book, exercise 13);

function foo(bar) {
  console.log(bar());
}

foo(bar("Welcome!"));    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]

// As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

// What happens here?

[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

/* 

The map method is invoked on the nested array `[[1, 2], [3, 4]]`. On each iteration an element `arr` from the calling array is passed to map's callback function, the callback function is executed and the returned value from the callback is put in a new array which map returns at the end. In the above example, the callback function calls the console.log method, passing it the reference arr's value at index 0, which ends up printing 1, 3, respectively, to the console. The return value of the console.log function is always `undefined`, therefore that is what gets returned by map on both iterations, and the return value of the new array reference created by map is `[undefined, undefined]`.

*/ 

// What will this code return and why?

let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).every(animalName => animalName.length > 2);

/* 
The code returns `true` because the return value of the array method every is a boolean. 
On line 211 an object literal `animals` is declared and initialized to the reference of 
`{ a: 'ant', b: 'bear', c: 'cat' }`. On the next line the static method Object.values is called with the animals object passed by reference into the method. Object.values returns an array reference of the values extracted from the key-value pairs of the passed in argument object. Because Object.values returns an array, we are able to chain the `every` array method, which takes a callback function as its argument and on each iteration an element's value from the calling array is passed into the callback function. The callback expression to the right of the arrow is evaluated on each iteration and if it evaluates to true for all arguments, that is what gets returned by every; otherwise if any of the expressions evaluate to false, the method call gets evaluated to `false` and that is what every returns.
*/

// What will this code output and why?

let a = 1;

function doit(a) {
  console.log(a); 
}

doit(3);
console.log(a); 

// The code outputs the values 3 and 1 to the console, respectively. On line 228 the function doit is invoked and passed in the value of 3 as its argument. 3 gets logged to the console. Lines 224 through 226 declare and define the function doit, which expects one parameter and in the function block the console.log method is invoked and passed in the function's parameter as its argument, and that gets printed to the console when doit is invoked. The function declaration's parameter `a` is a local variable which shadows the global variable `a` declared and initialized on line 222. When console.log is called on line 229, it gets passed the value of the global variable `a`, and 1 gets logged to the console. `a` in the global scope is not the same as the locally scoped `a` variable of the function doit. 


///What does this program log to the console? Why?
let greeting = ["Hello"];

const test = arr => {
  arr = ["ByeBye"];
  arr.push("World!");
  return arr;
}

test(greeting);
console.log(greeting) 

// `greeting` is declared and initialized to a reference of an array on line 56

// on line 64 `test` function is invoked with argument `greeting` passed in by reference
// `arr` is assigned a copy of the reference greeting. `arr` now points to the same array as `greeting` is memory. On `line 59`, arr is reassign to a new reference to a new array in memory, `["ByeBye"]`. `Arr` point to a difference array in memory from greeting. on `line 60` `arr` calls the push method with the string `world` passed in as argument. The string is add to the array. Arr now points to `["ByeBye", "World"]. On next line the function returns reference the the array `["ByeBye", "World"]. On lint 65 log the array '["Hello"] since arr points to a different array which take place on line 59 in the reassignmet.

// null must be used explicitly
// undefined can arise implicitly
// undefined and null represent the absence of a value