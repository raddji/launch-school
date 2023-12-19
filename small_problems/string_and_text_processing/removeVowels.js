// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
/*

input: array of strings
output: array of strings  

only the vowels will be removed from the input and the remaining characters returned as output

data structure: array with a conditional that filters certain characters

algo: iterate over input array
        convert current element to an array
          iterate over it and filter the vowels
        return element to array 
      return array to function 


      Should be able to solve with `map()` and `filter()` as well
*/

function removeVowels(arr) {
  let result = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currElArr = arr[idx].split("");
    let filtered = currElArr.filter((el) => !'aeiuoAEIOU'.includes(el));
    filtered = filtered.join("");
    result.push(filtered);
  }
  return result;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]