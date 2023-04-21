// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

/*
Input: (three) individual numbers
Output: String, a letter

a, b, c => (a + b + c) / 3 => Number, corresponds to a grade range => "A" (output)

Algorithm: 

1. Set variable `gradeAverage` to equal the return value of the expression (a + b + c) / 3, where a, b and c are the three input numbers 
2. use a conditional construct to determine in what range of the letter grade list `gradeAverage` falls (what would be best?)
  - will start with basic if/else probably
  - try switch
  - building an object from the grade letter list and taking data from the object
3. return the letter grade 

- in future solve using reduce()
*/

function getGrade(grade1, grade2, grade3) {
  let gradeAverage = (Number(grade1) + Number(grade2) + Number(grade3));
  gradeAverage = Math.round(gradeAverage / 3);

  // switch (true) {
  //   case gradeAverage > 90:
  //     return "A";
  //   default: 
  //   return console.log(`Keep trying..`);
  // }

  if (gradeAverage <= 100 && gradeAverage > 90) {
    return "A";
  } else if (gradeAverage <= 90 && gradeAverage > 80) {
    return "B";
  } else if (gradeAverage <= 80 && gradeAverage > 70) {
    return "C";
  } else if (gradeAverage <= 70 && gradeAverage > 60) {
    return "D";
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(92, 80, 70));    // "B"

