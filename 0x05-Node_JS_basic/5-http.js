// Require http to create an HTTP server
const http = require('http');
// Require fs to read files
const fs = require('fs');
// Require path to manipulate file paths
const path = require('path');
// Require countStudents function from 3-read_file_async.js file to read from
const countStudents = require('./3-read_file_async');

// Get the database file path from the command line arguments
const databasePath = process.argv[2];

// Create the HTTP server
const app = http.createServer((req, res) => {
    if (req.url === '/') {
        // When the URL path is "/"
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        // When the URL path is "/students"
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');

        countStudents(databasePath)
            .then(() => {
                res.end();
            })
            .catch((error) => {
                res.write(error.message);
                res.end();
            });
    } else {
        // For any other URL
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// The server listens on port 1245
app.listen(1245, () => {
    console.log('Server running on port 1245');
});

// Export the app for use in other modules
module.exports = app;