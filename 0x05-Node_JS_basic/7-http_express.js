// Require express to create the server
const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an instance of Express
const app = express();

// Get the database file path from the command line arguments
const databasePath = process.argv[2];

// Define the route for the root path "/"
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Define the route for the path "/students"
app.get('/students', (req, res) => {
    res.write('This is the list of our students\n');

    countStudents(databasePath)
        .then(() => {
            res.end();
        })
        .catch((error) => {
            res.write(error.message);
            res.end();
        });
});

// The server listens on port 1245
app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

// Export the app for use in other modules
module.exports = app;
