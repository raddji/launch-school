// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

// input: number
// output: boolean

// rules: 
// 1. input number is bigger than 0 
// what makes a year leap? 

// - year divisible by 4
// - if year divisible by 4 AND also divisible by 100 -> year IS NOT a leap year
// - if year divisible by 4 AND 100 BUT ALSO evenly divisible by 400  --> year IS leap year

// Data structure: if/else conditional 

// Algorithm: 
// 1. check if input number evenly divisible by 4 AND divisible by 400 
// 2. if condition evaluates to true, return true
// 3. else return false

function isLeapYear(year) {
  if (year % 400 === 0) {
    return console.log(true);
  } else if (year % 100 === 0) {
    return console.log(false);
  } else {
    return console.log(year % 4 === 0);
  }
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true