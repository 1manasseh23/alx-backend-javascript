// Require http to create an HTTP server
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Set the response header to plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Write the response body
    res.write('Hello Holberton School!');
    
    // End the response
    res.end();
});

// The server listens on port 1245
app.listen(1245);

// Export the app for use in other modules
module.exports = app;