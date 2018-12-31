const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))

//server
//defines the url endpoint to anything - /inventory
//require is pointing to the inventory.js file in routes folder
app.use('/inventory', require('./routes/inventory'))

//database & connection
mongoose.connect
//here we use mongodb required 27017 / and name our database name /inventory
('mongodb://localhost:27017/inventory', {useNewUrlParser: true}, () => {
    console.log('connected to db')
})

//server
app.listen(8000, () => {
    console.log('server is running on port 8000')
})

