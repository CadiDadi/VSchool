const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')

// Get all Todos in DB
todoRouter.get('/', (req, res, next) => {
    Todo.find((err, todos) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

// Get all Todos owned by User
todoRouter.get('/:userId', (req, res, next) => {
    Todo.find({user: req.params.userId}, (err, userTodos) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userTodos)
    })
})


todoRouter.post('/:userId', (req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.user = req.params.userId
    newTodo.save((err, todo) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(todo)
    })
})


module.exports = todoRouter