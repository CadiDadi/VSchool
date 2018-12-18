//setup
    // ONE TIME GLOBAL install: npm install -g nodemon
        //now instead of running: node server.js, you start server with: nodemon server.js
    //npm init -y
    //npm install express

// UUID - creates random numbers (to be used for IDs)
        // npm install UUID
        // const uuid = require('uuid/v4') (v4 is version to use, 4 is good)

//Postman:
    //Headers
        //key needs Content-Type checked/added, with Value: "application/json"
        // 3 menu bars going from top to bottom - make sure know which selections for each
        //3rd menu bar - typically want on BODY
    // POST:
            // 1. switch to BODY (in 2nd menu bar), scroll up to enter (there are two windows, the top is for INPUT, bottom OUTPUTs the data)
            // 2. select RAW & change dropdown to JSON
            // 3. input an OBJECT (in {}) to add to the ARRAY 

//cycle
    //client => server => API => DB => server => client

// DATA IN A DATABASE
//     COLLECTION: collection of items, ex. Todos
//         /todo
//     RESOURCE:   a specific item from a collection, ex. Todo
//         /todo:id

//req always include params and query, which are both empty objects by default
//req.query is an object


/////////////////////

const express = require('express')
    // console.log(express)
//calling express
//app is our server
const app = express()
    // console.log(app)
const uuid = require('uuid/v4')
//////
//teach server all the commands - get, post, put, delete
//req - request (client), res - response (server)
//1st endpoint
app.get('/', (req, res) => {
            //clients needs stuff from db
            //go get stuff from db
            // ... waiting ...
            //got data from db, will send back

    //res.send() is same as console.log(), except it outputs it into the browser window
    res.send("<h1>1st endpoint</h1>")
})
//2nd endpoint
app.get('/secondendpoint', (req, res) => {
    //res.send() is same as console.log(), except it outputs it into the browser window
    res.send("<h1>2nd endpoint</h1>")
})

//////
// URL:        www.google.com/photos?type=nike&size=9
// ENDPOINT (also considered a PARAM):   /photos
// QUERY:      ?key=value
// PARAMS: requesting specific items from database - the QUERY in the URL is equal to this:
// {
//     type: 'nike',
//     size: 9
// }
    //example:
        // app.get('/cars/:id', (req, res) => {
        //     res.send('here are some cars')
        //     console.log(req.params)
        //     console.log(req.params)
        // })

//////////
//app.listen should always be listed last in file
//client sends request, server sends a Response
//servers main job is to listen
//tell it what port to use (want to use between 3000-8000, but 3000-10 is used a lot)
app.listen(8000, () => {
    console.log('NOTE: server running on port 8000')
})









