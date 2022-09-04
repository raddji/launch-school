function oddNumbers() {
  let maxNum = 99;
  for (let i = 0; i <= maxNum; i += 1) {
    if (i % 2 === 1 && i <= 99) {
      console.log(i)
    }
  }
}
console.log(oddNumbers());