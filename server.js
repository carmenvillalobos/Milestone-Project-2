// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
const bandsController = require('./controllers/bands_controller')
const bodyParser = require('body-parser')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(bodyParser.json())

//DB CONNECTION
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
const testSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

//ROOT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CONTROLLERS 
//change this to whatever we name our routes
app.use('/bands', bandsController)


//LISTEN
testSequelize();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})