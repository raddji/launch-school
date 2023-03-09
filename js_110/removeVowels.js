function removeVowels(string) {
  return string.replace(/[aeiou]/ig, '');
}

console.log(removeVowels('Raddi')); // Rdd