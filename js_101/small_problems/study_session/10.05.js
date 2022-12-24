/*
  Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

problem
=======
input: number

output: string

rules: input is a positive integer, a whole number > 0
// each side will correspond to n symbols

example
=======

data structure
==============
5 -> "    *", "   **", "..***", " ****", "*****"

5 -> "    *"

[1, 2, 3, 4, 5] -> length is 5
0  1  2  3  4
 ["    *", "   **", "  ***", " ****", "*****"]


5
[1, 2, 3, 4, 5] =>
["*", "**", "***", "****", "*****"] =>
["    *", "   **", "  ****", " ****", "*****"]


- given n, the integer
- create an array that has the numbers from 1 to n
- create a new array that has the same number of asterisks asterisks as each number in the original array
- add spaces to each string in the array until its length is 5
- log each element of the array to the console

idx = 1 
idx <= 5

=> 
    *
   **
  ***
 ****
*****

    *  4 spaces, 1 star
   **  3 spaces, 2 stars
  ***  2 spaces, 3 stars
 ****  1 spaces, 4 stars
*****  0 spaces, 5 stars


- iterate through the numbers 1 to 5 (n) (inclusive)
  - create an empty string `line`
  - add current iteration number of stars to `line`
  - add spaces to the beginning of `line` so that the length of `line` is 5
  - log the current line
  - next iteration


'string' => ['S', 'T', 'R', 'I', 'N', 'G']

'string' => [] => ['s', 't', 'r', 'i', 'n', 'g'] => ['S', 'T', 'R', 'I', 'N', 'G']

algorithm
=========
*/


function triangle(n) {
  for (let idx = 1; idx <= n; idx += 1) {
    let line = "";
    line += "*".repeat(idx);
    line = line.padStart(n, " ");
    console.log(line);
  }
}


triangle(5);

/*


    *
   **
  ***
 ****
*****


*/

triangle(9);

/*


        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********


*/