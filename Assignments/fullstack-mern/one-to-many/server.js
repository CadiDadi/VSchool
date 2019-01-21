const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(morgan('dev'))

app.use('/auth', require('./routes/auth'))
app.use('/todo', require('./routes/todo'))


mongoose.connect(
    'mongodb://localhost:27017/one-to-many', 
    {useNewUrlParser: true},
    () => console.log(`Connect to the DB!`)
)

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => `Server is running on port ${PORT}`)