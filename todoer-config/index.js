require('dotenv').config();

const config = {
  port: process.env.PORT || '8888',
  db: process.env.MONGODB_URL || 'mongodb://localhost/todoer'
};

module.exports = config;
