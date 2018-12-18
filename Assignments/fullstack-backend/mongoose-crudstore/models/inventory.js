const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    price: Number
})
//we define InventoryModel here
module.exports = mongoose.model('InventoryModel', InventorySchema)