const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')

// Get user todos
todoRouter.get('/', (req, res, next) => {
    Todo.find({user: req.user._id}, (err, userTodos) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userTodos)
    })
})

// Add new Todo
todoRouter.post('/', (req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.user = req.user._id
    newTodo.save((err, todo) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(todo)
    })
})



module.exports = todoRouter