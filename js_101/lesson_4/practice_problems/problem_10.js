// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let agesArray = Object.values(ages);
console.log(agesArray);

console.log(Math.min(...agesArray));
