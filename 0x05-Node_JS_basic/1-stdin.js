/*
* Display the massage welcome to school
*/
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// // constand reading the line
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Display the massage welcome to school
// console.log("Welcome to Holberton School, what is your name?");


// rl.on('line', (name) => {
//     console.log(`Your name is: ${name}`);
//     rl.close();
//     console.log("This important software is now closing");
// });
