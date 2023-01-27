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
const path = require("path");

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "..", "build")));


//ROOT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//GET ROUTE
//VIEW ALL TASKS
app.get('/api/tasks',async  (req, res) => {
  try {
    const foundTasks = await ToDoList.findAll()
    // console.log(foundTasks)
    res.status(200).json(foundTasks)
} catch (error) {
    res.status(500).json(error)}
})

//GET 1 ROUTE
//VIEW 1 TASK
app.get('/api/tasks/:id',async  (req, res) => {
  try {
    const foundTask = await ToDoList.findOne({
      where: {
          id: req.params.id
      }
  })
    res.status(200).json(foundTask)
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

// UPDATE ROUTE
// UPDATE A TASK
app.put('/api/tasks/:id', async (req, res) => {
  try {
      console.log(req.body, req.params.id)
      const updatedTasks = await ToDoList.update(req.body, {
        where: {
            id: req.params.id
        }
    })
      res.status(200).json({
          message: `Successfully updated ${updatedTasks} task(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

// DELETE ROUTE
// DELETE A BAND
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    console.log(req.params.id)
      const deletedTasks = await ToDoList.destroy({
          where: {
              id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully deleted ${deletedTasks} tasks(s)`
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

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})