const mongoose = require('mongoose');

const Task = require('./models/task');

mongoose.connect(url);
mongoose.connection.on('error', () => console.error('ERROR ERROR'));
mongoose.connection.once('open', () => console.log('db connected'));


module.exports = {
  Task
}
