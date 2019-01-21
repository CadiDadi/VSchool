const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8000 



// Middleware -> to run on EVERY request
app.use(express.json()) // -> req.body
app.use(morgan('dev'))


// Routes
    // Security check, did the requestors token originate from this server
app.use('/api', expressJwt({secret: process.env.SECRET})) // req.user { username, _id, isAdmin }

app.use('/auth', require('./routes/auth'))
app.use('/api/todo', require('./routes/todo'))


// DB connect
mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true}, () => {
    console.log('Connected to the DB')
})

// Global error handler
app.use((err, req, res, next) => {
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message}) 
})

// Server Listen
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})