const express = require('express')
const app = express()
const uuid = require('uuid/v4')


// Simulated Database of Cars
let carsCollection = [
    {
        make: "Volvo",
        model: "85p...",
        color: "blue",
        _id: "8cbd20a1-46c6-4898-a9e9-1946fb88f405"
    },
    {
        make: "Nissan",
        model: "Sentra",
        color: "red",
        _id: "bc613ee2-6223-4d09-b90f-8ff5957d4f09"
    },
    {
        make: "Nissan",
        color: "blue",
        model: "Sentra",
        _id: "e52416e5-a080-4f8f-a5f1-cf2f7ab6db34"
    }
]

// Middleware
    // This runs on all requests and if the user send a body object (POST, PUT),
    // Then express will make that object available as `req.body` in our Routes.
app.use(express.json())

// Routes
    //console.logs only work on whichever route is run


// GET ALL & Get filtered
app.get('/cars', (req, res) => {
    // If the user added a query parameter for color. ex:  ?color=red
    // Then search the database for cars with that specific color and send those
    if(req.query.color){
        const foundCars = carsCollection.filter(car => car.color === req.query.color)
        res.send(foundCars)
    } else {
    // Otherwise, send back the entire cars collection
        res.send(carsCollection)
    }
})

// GET ONE - (Getting singular Resource from a Collection) 
app.get('/cars/:id', (req, res) => {
    // Get the id from req.params
    const carId = req.params.id
    // Search our 'database' for the object with that ID
    const foundCar = carsCollection.find(car => car._id === carId)
    // Return that object
    res.send(foundCar)
})

// Add One
app.post('/cars', (req, res) => {
    // req.body is what the user sends in a POST or PUT request
    const newCar = req.body
    console.log(newCar)
    // Manually add new ID to new object.  MongoDB will do this for us
    newCar._id = uuid()
    // Add new car to carsCollection array
    carsCollection.push(newCar)
    // Send back updated collection
    res.send(carsCollection)
    // // OR send back just the new object 
    // res.send(newCar)
})

app.delete('/cars/:id', (req, res) => {
            // get id from params - 2 ways to do this: 1. set req.params.id as a variable (carId) (see above) 2. dont have to set as a variable, just use req.params.id in out updatedCars variable below
            //const carId = req.params.id
    // filter through array for that id, remove it
        // If the car id is not equal to the params.id that the user wants deleted, return the car. This returns a new array with the requested car removed
    const updatedCars = carsCollection.filter(car => car._id !== req.params.id)
    // return new array
    carsCollection = updatedCars
    res.send(carsCollection)
})

app.put('/cars/:id', (req, res) => {
    // req.params.id to get item id
    const carId = req.params.id
    // req.body to update our database
    const carUpdates = req.body
    // send back updated collection
        // {...car, ...carUpdates} = This is first spreading the contents of the old car into
        // an object, and then spreading the contents of the car updates into the object.  Since
        // The car updates are spreading 2nd, they will overwrite any keys that match the original
        // car keys while leaving the other keys alone.
    const updatedCollection = carsCollection.map(car => car._id === carId ? {...car, ...carUpdates} : car)
    res.send(updatedCollection)
})

// Server
app.listen(5000, () => {
    console.log('[+] Listening at port 5000')
})





