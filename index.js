const express = require('express');
const bodyParser = require('body-parser');
const { task } = require('@todoer/api');
const config = require('@todoer/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  const localTime = new Date().toLocaleTimeString();
  res.status(200).send(`Server time is ${localTime}.`);
});

app.use('/task', task);

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(config.port, () => {
  console.log(`Server is running in port:${config.port}`);
});
