const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    blogImg: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("BlogPost", blogPostSchema)