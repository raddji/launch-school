function getMiddle(s) { 
  if (s.length % 2 === 0) {
    let middleChar = Math.floor(s.length / 2);
    return s[middleChar - 1] + s[middleChar];
  } else {
    let middleChar = Math.floor(s.length / 2);
    return s[middleChar - 1];
  }
}

console.log(getMiddle('sunset'));
console.log(getMiddle('vertical'));
console.log(getMiddle('baby'));
console.log(getMiddle('cup'));