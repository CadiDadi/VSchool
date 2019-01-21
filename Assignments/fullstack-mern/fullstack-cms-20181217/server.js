const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
//check if a Port is provided (API, etc), otherwise use specified port ()
const PORT = process.env.PORT || 8000

// Middleware fired on every request
app.use(express.json()) // req.body  POST PUT
app.use(morgan('dev'))  // Helpful console logs on server requests

//Routes
    //1. in client/package.json - set url to "proxy": "http://localhost:8000" (tells front end what endpoint to use)
    //2. this line sets to ...8000/items
app.use('/items', require('./routes/item'))

// Mongoose Connect
    // setting DATABASE HERE - crud-store
    //mongodb://localhost:27017/ - THIS IS DEFAULT REQUIRED
mongoose.connect('mongodb://localhost:27017/crud-store', {useNewUrlParser: true}, () => {
    console.log('Scott, you are connected to the db')
})

// Global server error handler
//4 parameters - err, req...
app.use((err, req, res, next) => {  
    //good to console.log(err) here
    return res.send({errMsg: err.message})
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})