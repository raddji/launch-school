let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let munsterAgesValues = Object.values(ages);
console.log(munsterAgesValues);

let totalAge = 0;
munsterAgesValues.forEach((age) => {
  totalAge += age;
});
console.log(totalAge);

// reduce() solution:
// Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0);
