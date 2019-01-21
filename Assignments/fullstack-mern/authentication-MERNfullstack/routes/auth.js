const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')



authRouter.post('/signup', (req, res, next) => {                     
    User.findOne({username: req.body.username.toLowerCase()}, (err, existingUser) => {
        if (err) {
            res.status(500)
            return next(err) 
        }
        // is there an existing user / send an error letting the user know
        if(existingUser !== null){
            res.status(500)
            return next(new Error("That username is already taken."))
        }

        //  If no errors occured, save the new user and create the token
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            // Create jsonwebtoken for user
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send( { user: user.withoutPassword(), token } )
        })
    })
})



authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        // Check if username was correct
        if(!user){
            res.status(403)
            return next(new Error("Username or Password are incorrect!"))
        }

        user.checkPassword(req.body.password, (err, match) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!match) {
                res.status(401)
                return next(new Error("Username or Password are incorrect!"))
            }
            // token-authenticated
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ user: user.withoutPassword(), token })
        })  
    })
})

module.exports = authRouter