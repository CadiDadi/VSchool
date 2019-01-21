const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')

//post because adding to db
authRouter.post('/signup', (req, res, next) => {
    //check if username is already in use (in db)
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        // user is truthy value, create error if already in db
        //if(user) is same as if(user !== null)
        if(user){
            res.status(500)
            //create new Error
            return next(new Error("That username is already taken"))
        }
        //else - if not in db, create&save new user info to db
        const newUser = new User(req.body)
        newUser.save((err, newUserObject) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newUserObject)
        })
    })
})

//post - not adding to db, but need their info again
authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        //check: 1. if user is null (!null) 2. if the password they enter does NOT match the password in the db
        if(!user || user.password !== req.body.password){
            res.status(500)
            //dont specify if it is username or the password that is wrong...that gives them a hint
            return next(new Error("Username or Password are incorrect"))
        }
        //else send them their user object
        return res.status(200).send(user)
    })
})

module.exports = authRouter