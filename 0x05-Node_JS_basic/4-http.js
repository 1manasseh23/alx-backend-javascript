const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();


app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

/* // Create the HTTP server
// const app = http.createServer((req, res) => {
//     // Set the response header to plain text
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
    
//     // Write the response body
//     res.write('Hello Holberton School!');
    
//     // End the response
//     res.end();
// });

// // The server listens on port 1245
// app.listen(1245);
*/
module.exports = app;