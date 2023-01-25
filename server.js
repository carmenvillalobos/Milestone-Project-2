// DEPENDENCIES
const cors = require('cors')
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./sequelize/models')
const {Op} = require('sequelize')
const {ToDoList} = db

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


//ROOT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/tasks',async  (req, res) => {
  try {
    const foundTasks = await ToDoList.findAll()
    console.log(foundTasks)
    res.status(200).json(foundTasks)
} catch (error) {
    res.status(500).json(error)}
})

// CREATE ROUTE
// CREATE TASK
app.post('/api/tasks', async (req, res) => {
  try {
      console.log(req.body)
      const newTasks = await ToDoList.create(req.body)
      res.status(200).json({
          message: 'Successfully inserted a new task',
          data: newTasks
      })
  } catch(err) {
      console.log(err)
      res.status(500).json(err)
  }
})


//LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})