const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 1245;

// Define the route for the root path "/"
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(PORT, () => {
  console.log('Server is running on port 1245');
});

// Export the app for use in other modules
module.exports = app;
