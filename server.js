// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const { bandsController, eventsController, stageController } = require('./controllers')
const bodyParser = require('body-parser')

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(bodyParser.json())

//ROOT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CONTROLLERS 
//change this to whatever we name our routes
app.use('/bands', bandsController)
app.use('/events', eventsController)
app.use('/stages', stageController)


//LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})