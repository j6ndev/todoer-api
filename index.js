const express = require('express');
const bodyParser = require('body-parser');
const { task } = require('@todoer/api');

const app = express();
const PORT = 8888;

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

app.listen(PORT, () => {
  console.log(`Server is running in port:${PORT}`);
});
