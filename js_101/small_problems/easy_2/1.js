// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// input: array and object
// output: string 
// rules: array has 2 or more elements, object has two keys "title" and "occupation"
// function([]{}) => "Hello, name and title greeting!"

function greetings(arrName, objTitle) {
  return console.log(`Hello ${arrName.join(' ')}! Nice to have a ${objTitle.title} ${objTitle.occupation} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.