// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

/*
needs a boolean variable to track whether the current character needs capitalizing 

start it with value of `true` as the first character will always have to be capitalized

if the current character is alphabetic (outer if)

  if the tracker variable is true, (inner if)
    capitalize the character, add it to result array, 
    change the value of the boolean tracker to `false` 
  otherwise (current character is still being checked for being alphabetic) 
    lowercase current character and add it to result array 
    change tracker to `true`

else add the current character as it is (non alphabetic)

  when to use nested if conditions: 
  If we have a so to speak banner condition that needs to be true for more than one situation, then nest the conditions for the other situations under the banner condition. A tracker variable can help to keep track of the sub conditions under the banner condition. 
*/

function staggeredCase(str) {
  let resultArr = [];
  let strArr = str.split("").map(char => char.toLowerCase());
  let needsCapitalize = true;

  strArr.forEach(char => {
    if (char >= "a" && char <= "z") {

      if (needsCapitalize) {
        needsCapitalize = false;
        resultArr.push(char.toUpperCase());
      } else {
        needsCapitalize = true;
        resultArr.push(char.toLowerCase());
      }

    } else {
      resultArr.push(char);
    }
  });
  
  return resultArr.join("");;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

