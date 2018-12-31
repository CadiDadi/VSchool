const express = require('express')
const inventoryRouter = express.Router()
//brings in the Model/Schema we created in models folder
const Inventory = require('../models/inventory')

// req = request, res = response 

//get all
inventoryRouter.get('/', (req, res) => {
//we can name the parameters anything. err can be error. name the data something relevant, like: allInventory then would send(allInventory) in the return line
Inventory.find((err, data) => {
        if(err){
            //handle error
        }
        return res.status(200).send(data)
    })
})

//get one
//we defined the url in server.js, so just put '/' here
inventoryRouter.get('/', (req, res) => {
    //we define inventoryItem here
    Inventory.findOne({_id: req.params.id}, (err, inventoryItem) => {
        if(err) {
            //handle error
        }
        return res.status(200).send(inventoryItem)
    })
})

//post
inventoryRouter.post('/', (req, res) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, newInventoryItem) => {
        if(err){
            //handle error
        }
        return res.status(201).send(newInventoryItem)
    })
})

//put
inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndUpdate(
        //find item by id
        {_id: req.params.id},
        //return that item
        req.body,
        //need this to return the new data
        {new: true},
        (err, updatedInventory) => {
            if(err) {
                //handle error
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

//delete
inventoryRouter.delete('/:id', (req, res) => {
    Inventory.findOneAndDelete(
        {_id: req.params.id},
        (err, deleteInventory) => {
            if(err) {
                 //handle error
                
            }
            //return - needs completed
        }
    )
})

module.exports = inventoryRouter