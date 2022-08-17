// we want to select the key-value pairs where the value is 'Fruit'.

const { val } = require("cheerio/lib/api/attributes");

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter += 1) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === "Fruit") {
      selectedFruits[currentKey] = currentValue;
    }
  }
  return selectedFruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }