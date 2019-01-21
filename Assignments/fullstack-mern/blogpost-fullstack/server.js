const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

app.use(morgan('dev'))
app.use(express.json())


// Routes
app.use('/auth', require('./routes/auth'))
app.use('/blog', require('./routes/blogPost'))

mongoose.connect('mongodb://localhost:27017/database-name', {useNewUrlParser: true}, () => {
    console.log('Connected to the DB')
})

// Global error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})