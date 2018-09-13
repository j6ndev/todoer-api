require('dotenv').config();

const Joi = require('joi');

const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['dev', 'prod', 'test'])
    .default('dev'),
  PORT: Joi.number()
    .default('8888'),
  MONGODB_URL: Joi.string().required()
    .description('MongoDB Url')
}).unknown()
  .required();

const { error, value: env } = Joi.validate(process.env, configSchema);

if(error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  enviroment: env.NODE_ENV,
  port: env.PORT,
  db: env.MONGODB_URL
};

module.exports = config;
