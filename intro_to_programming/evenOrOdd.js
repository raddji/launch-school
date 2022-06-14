function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Sorry you entered the wrong value, not an integer. Try again!");
    return;
  } 

  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd("Three")