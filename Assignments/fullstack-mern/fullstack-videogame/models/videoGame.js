const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoGameSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    developer: String,
    platform: {
        type: String,
        //enum makes so user can only choose what we designate
        enum: ['ps3', 'xbox', 'atari'],
        default: "ps3",
        lowercase: true
    },
    releaseYear: Number,
    //if you want $ sign, easiest to do this on front end
    price: Number 
})

module.exports = mongoose.model("VideoGame", videoGameSchema)
