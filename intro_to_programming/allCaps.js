function allCaps(str) {
  if (str.length > 9) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

// function allCaps(str) {
//   return str.length > 9 ? str.toUpperCase() : str;
// }

console.log(allCaps("hello world!"));
console.log(allCaps("goodbye"));