const router = require('express').Router()
const db = require('../sequelize/models')

//Routes

//index
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

//Create task
router.post()