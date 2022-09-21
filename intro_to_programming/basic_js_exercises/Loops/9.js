// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index += 1) {
  // if (fish[index] !== 'Nemo') {
    console.log(fish[index]);
  if (fish[index] === 'Nemo')
    // console.log(fish[index]);
    break;
  // }
}
