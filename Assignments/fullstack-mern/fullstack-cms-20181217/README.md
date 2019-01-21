MERN FullStack Template

nodemon is installed GLOBALLY

Back End
    base folder 
        installs & run 
            npm init -y
            npm i express 
                mongoose 
                morgan
            nodemon server.js
    key points
        server.js file
            1. //check if a Port is provided (API, etc), otherwise use specified port ()
                const PORT = process.env.PORT || 8000
            2. //Routes
                //this line sets to endpoint 'items' (so is localhost:8000/items
                app.use('/items', require('./routes/item'))
            3. // Mongoose Connect
                // setting DATABASE HERE - crud-store
                //mongodb://localhost:27017/ - THIS IS DEFAULT REQUIRED
                mongoose.connect('mongodb://localhost:27017/crud-store', {useNewUrlParser: true}, () => {

Front End
    client folder 
        installs & run
            create-react-app
            npm i axios 
                react-router-dom 
                moment
            npm start
    key points
        in client/package.json 
            tell front end to use localhost:8000:   "proxy": "http://localhost:8000"
