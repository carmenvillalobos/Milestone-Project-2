const router = require('express').Router()
const db = require('.../models')

//INDEX
router.get('/', (req, res) => {
  db.Task.find()
  .then((tasks) => {
    res.render('tasks/index', { tasks })
  })
  .catch(err => {
    console.log(err) 
    res.render('error404')
  })
})

//CREATE PLACE
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Task.create(req.body)
  .then(() => {
      res.redirect('/tasks')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//NEW PLACE
router.get('/new', (req, res) => {
  res.render('tasks/new')
})

//SHOW
router.get('/:id', (req, res) => {
  db.Task.findById(req.params.id)
  .populate('comments')
  .then(task => {
      console.log(task.comments)
      res.render('tasks/show', { task })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//UPDATE
router.put('/:id', (req, res) => {
  db.Task.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/tasks/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


//DELETE PLACES
router.delete('/:id', (req, res) => {
  db.Task.findByIdAndDelete(req.params.id)
  .then(task => {
      res.redirect('/tasks')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//EDIT PLACE
router.get('/:id/edit', (req, res) => {
  db.Task.findById(req.params.id)
  .then(task => {
      res.render('tasks/edit', { task })
  })
  .catch(err => {
      res.render('error404')
  })
})

module.exports = router