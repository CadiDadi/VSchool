const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// Other User Methods/Properties => Delete user DB at this point as the previously
// made users will not have encrypted passwords causing all login/signup to fail. 

// Before saving user to DB, encrypt password so that the raw password
// is never saved in the front or backend
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

// Decrypt user password in DB, and compare to user password attempt
    // CheckPassword
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

// Create a user method that strips out the password before sending the 
// user data to the front end
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}





module.exports = mongoose.model("User", userSchema)