//this is the order these components should be - imports, middleware, routes....

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

// Middlewares
app.use(morgan('dev'))
app.use(express.json()) // req.body

// Routes - go get our routes from this file
app.use("/video-games", require('./routes/videoGame'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/videogames', {useNewUrlParser: true}, () => {
    console.log(`We're connected to the db sir!`)
})

// Global Server Error Handler
// Express knows it an error handler middleware
// because we pass in (err, req, res, next)
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})