// Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

//my solution:

const extractRegion = langCombination => {
  let langRegion = langCombination.split('_')[1];
  return langRegion.slice(0, 2);
}

// // LS solution by chaining split method
// function extractRegion(locale) {
//   return locale.split('.')[0].split('_')[1];
// }

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'