// Require the express module to cread thr server
const express = require('express');

// Create an instance of Express
const app = express();

// Define the route for the root path "/"
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

// Export the app for use in other modules
module.exports = app;
