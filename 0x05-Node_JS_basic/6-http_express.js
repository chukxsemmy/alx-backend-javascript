/**
 * Small HTTP server using the express module.
 */

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
