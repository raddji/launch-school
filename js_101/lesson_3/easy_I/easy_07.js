// find the name "Dino" in each string

let str1 = 'Few things in life are as important as house training your pet dinosaur.';
let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

console.log('first:', str1.match('Dino') !== null);
console.log('second:', str2.match('Dino') !== null);

console.log('first:', str1.indexOf('Dino') !== -1);
console.log('second:', str2.indexOf('Dino') > -1);