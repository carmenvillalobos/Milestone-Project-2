//When I installed npx sequelize-cli init, the template made this file as config.json. I changed this file to config.js and used the same code that we learned in our sql class
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
module.exports = {
  "development": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: "postgres",
    logging: true,
  },
  "test": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: "postgres",
  },
  "production": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: "postgres",
  }
}
