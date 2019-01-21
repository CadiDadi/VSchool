const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    memberSince: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("User", userSchema)