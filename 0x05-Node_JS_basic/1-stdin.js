// constand reading the line
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the massage welcome to school
console.log("Welcome to Holberton School, what is your name?");


rl.on('line', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
    console.log("This important software is now closing");
});


//User should put in their name
// process.stdin.on('data', (data) => {
//     const name = data.toString().trim();

//     //Prints the name of the user
//     console.log(`Your name is: ${name}`);

//     //Closs the user'a name
//      console.log("This important software is now closing");
//      process.exit();
// });
