// We have been asked to implement a function that determines whether or not a given word is a reserved keyword. We wrote the isReserved function below along with some test cases, but we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let answer = false;
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      answer = true;
    }
  });

  return answer;
}

// because no matter what we explicitly return from the callback function, the forEach method will still always only return `undefined`, we need to find a different way to store the information obtained from the evaluation of our conditional inside the loop; therefore, I am utilizing a variable `answer` initialized to the boolean value of `false` by default, and if the current argument actually happens TO BE a reserved word, then we change the value to the default `answer` to `true` and we return that instead, and now our function works correctly. 

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true