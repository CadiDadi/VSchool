const express = require('express')
const itemRouter = express.Router()
const Item = require("../models/item")

itemRouter.get('/', (req, res, next) => {
    Item.find((err, items) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

itemRouter.get('/:id', (req, res, next) => {
    Item.findOne({_id: req.params.id} , (err, item) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

itemRouter.post('/', (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, item) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(item)
    })
})

itemRouter.put('/:id', (req, res, next) => {
    Item.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

itemRouter.delete('/:id', (req, res, next) => {
    Item.findOneAndDelete({_id: req.params.id}, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`${deletedItem.name} was succesfully deleted!`)
    })
})

module.exports = itemRouter