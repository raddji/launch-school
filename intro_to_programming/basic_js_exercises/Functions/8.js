// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

function greet(intCode) {
  switch (intCode) {
    case 'en': return "Hi!";
    case 'fr': return "Salut!";
    case 'pt': return "Ola!";
    case 'de': return 'Hallo!';
    case 'sv': return "Hej!";
    case 'bg': return "Здравей!";
    default: return "Sweeet!";
  }
}

// Note: if we use return statements in the clauses, we don't need to include additional break statements, because return will immediately exit from the function anyway.

console.log(greet('en')); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
greet('bg'); // 'Здравей!'
greet(); // "Sweet!"