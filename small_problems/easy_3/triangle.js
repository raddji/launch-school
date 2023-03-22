// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

/* 
input: positive integer/ number n
output: string (made up of asterikses and empty spaces)

Rules: 
all sides of a right triangle are the same 
all sides are n length
the right angle has to be in the bottom right corner

data structure: can I solve with just a string? 

--*
-**
***


algo: 

-use an iteration method to iterate over the input and print asteriks on the console as the input decreases and pad it with empty spaces

*/ 

function triangle(n) {
  let tri = '';
  for (let i = 0; i < n; i += 1) {
    tri += "*";
    console.log(tri.padStart(n, " "));
  }
}


console.log(triangle(5));

//     *
//    **
//   ***
//  ****
// *****

console.log(triangle(9));

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********