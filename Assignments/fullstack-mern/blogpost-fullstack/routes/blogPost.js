const express = require('express')
const blogPostRouter = express.Router()
const BlogPost = require('../models/blogPost')


// Get user's blogpost
blogPostRouter.get('/:userID', (req, res, next) => {
    BlogPost.find({user: req.params.userID}, (err, blogPosts) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(blogPosts)
    })
})


// Get a Single Blog Post for a specific User
blogPostRouter.get('/:userID/:blogID', (req, res, next) => {
    BlogPost.findOne(
        {user: req.params.userID, _id: req.params.blogID}, 
        (err, post) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(post)
    })
})

// Add new post
blogPostRouter.post('/:userID', (req, res, next) => {
    const newBlogPost = new BlogPost(req.body)
    // add user id to blogpost
    newBlogPost.user = req.params.userID
    // save  blogpost
    newBlogPost.save((err, newPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPost)
    })
})


module.exports = blogPostRouter