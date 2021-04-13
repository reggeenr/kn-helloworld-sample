const express = require('express');
const { somethingMeaningful } = require('./my-logic');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}! on port ${port}`);
});

app.get('/do-it', (req, res) => {
  console.log('Some app endpoint that does something meaningful');
  res.json(somethingMeaningful());
});


app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
