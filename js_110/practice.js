function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  // console.log(dotSeparatedWords);
  while (dotSeparatedWords.length > 0) {
    
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        break;
      } 
  } 

  return true;
}

// function isAnIpNumber(word) {
//   if (typeof Number(word) === 'number') {
//     return true;
//   }
//   return false;
// }



function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("1.2.3.4"));
console.log(isDotSeparatedIpAddress("1.2.3"));