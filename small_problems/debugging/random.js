// One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a TypeError, telling us that dishName.join is not a function. What is wrong?


// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];
    // console.log(randomElement);

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }
  // console.log(randomElements);
  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = (random(adjective) + " " + random(firstNoun) + " " + random(secondNoun)).split(" ");
// console.log(dishName);
let dish = (random(ingredients, 3) + ", " + random(spices, 2) + ", " + random(extras, 1)).split(" ");

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(' '));

// we were calling an Array method on a string, and that is why the TypeError was being raised. By using `split` to turn the result string into an array, we are able to implement the `join` method on the final output to the console.