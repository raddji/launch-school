// Write a function that will take a short line of text, and write it to the console log within a box.


/* 
algorithm:

- set a horizontalRule
- set a emptyLine 
- console.log each line to create the image

*/

function logInBox(message, messageMaxLength) {
  if (message.length > messageMaxLength) {
    
  }
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

console.log(logInBox('To boldly go where no one has gone before.', 15));

/*

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

*/


logInBox('');

/*

+--+
|  |
|  |
|  |
+--+

*/