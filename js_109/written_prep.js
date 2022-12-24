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
    let x = 8;           
    console.log(x);
  } else  {
    bar(x);
  }
}
console.log(x);           
foo(x);                    
console.log(x);            
foo(6);                    
console.log(x);
            
function bar(y){           
  if  (y < 10)  {              
    x = 24;
  }
}


