const express = require('express')
const app = express()
const uuid = require('uuid/v4')
//if server doesnt work, npm i --save cors
const cors = require('cors')

let bountyCollection = [
    {
        fName: 'Plate',
        lName: 'X',
        living: true,
        bountyAmount: '$300',
        type: 'Sith',
        _id: uuid()
    },
    {
        fName: 'Plob',
        lName: 'Z',
        living: true,
        bountyAmount: '$200',
        type: 'Sith',
        _id: uuid()
    },
    {
        fName: 'Plarcus',
        lName: 'Y',
        living: true,
        bountyAmount: '$100',
        type: 'Jedi',
        _id: uuid()
    }
]

//middleware
app.use(express.json()) //gives us access to the Body - req.body
app.use(cors())

////routeS
        //console.logs - block level - only work on whichever route is run
        //res.send returns/sends data back to user

//GET ALL objects in the array  - route
app.get('/bounty', (req, res) => {
        console.log(bountyCollection)
    // res.status(200) //status requests. 200 is good. status requests we will cover later
    // res.send(err) //advanced, will cover this later
    res.send(bountyCollection)
})

//GET all with specific conditions - query


// GET ONE object from array - route
app.get('/bounty/:id', (req, res) => {
    // get the id from req.params
    const bountyId = req.params.id
        console.log(req.params)
    //search DB for the object with that Id
    const foundBounty = bountyCollection.find(bounty => bounty._id === bountyId)
    //return that object
    res.send(foundBounty)
})

//POST(add) ONE object to array - route
    //when posting(adding) objects to the array, dont include the ID (it is automatically generated)
app.post('/bounty', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bountyCollection.push(newBounty)
        console.log(req.body)
    res.send(bountyCollection)
})

//PUT - route
app.put('/bounty/:id', (req, res) => {
    const bountyId = req.params.id
    const bountyUpdates = req.body
    const updatedBountyCollection = bountyCollection.map(bounty => bounty._id === bountyId ? {...bounty, ...bountyUpdates} : bounty)
        console.log(req.body)
    res.send(updatedBountyCollection)
})

//DELETE - route
app.delete('/bounty/:id', (req, res) => {
    const bountyId = req.params.id
    let updatedBountyCollection = bountyCollection.filter(bounty => bounty._id !== bountyId) 
    bountyCollection = updatedBountyCollection
        console.log(bountyCollection)
    res.send(bountyCollection)
})

//server (this should be last item in file)
app.listen(5000, () => {
    console.log('listening port 5000')
})