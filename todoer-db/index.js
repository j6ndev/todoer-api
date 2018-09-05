const mongoose = require('mongoose');
const config = require('@todoer/config');

const Task = require('./models/task');


mongoose.connect(config.db);
mongoose.connection.on('error', () => console.error('ERROR ERROR'));
mongoose.connection.once('open', () => console.log('db connected'));


module.exports = {
  Task
}
