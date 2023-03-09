/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
 const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" }
 Object.freeze(obj);
 

 
 /**
  * BONUS: 
  * A single function should satisfy the strings defined 'obj' and the bonus objects below
  * The function should only take a single argument of type object
  * The function should be able to accomidate any word between the single quotes
  */
 const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" }
 const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" }
 Object.freeze(bonusObj1);
 Object.freeze(bonusObj2);
 
 
 
 
 
 
 /** for loop - function name: forSolution */ //Tony
 function forSolution(obj) {
  let array = obj.text
 }

//  =begin
//   ***Problem***
//     - Description: 
//     - Input: 
//       -object with a text property pointing at a string
//     - Output:
//       -new string with 'e' removed after "letter"
//     - Questions

//   ***Data Structure***
//     -

//   ***Algorithm***
//     -split string into array of letters
      // - 

//   =end
 
 
 
 
 /** while loop - function name: whileSolution */ // Raddi
 
 
 
 
 
 /** do while loop - function name: doWhileSolution */ // Tony
 
 
 
 
 
 /** forEach iteration method  - function name: forEachSolution */
 // Radi
 
 
 
 
 /** filter iteration method  - function name: 'filterSolution' */
 // Tony
 
 
 
 
 // map iteration method
 // Raddi
 
 
 
 
 // reduce iteration method // Tony


 console.log(countOccurencies('abbab')); //=> {a:2, b: 3}

function countOccurencies(string) {
  // split up string into array of letters
  // make an object
    // make each character the property of object 
    // if letter already exists or its 0
      // increment property by one
    // else
      // set it to zero
    // 
  let array = [...string]
  let obj = {}
  
  for (let letter of array) {
    if (obj[letter]) {
      obj[letter] += 1
    } else {
      obj[letter] = 1
    }
  }
  return obj
}
