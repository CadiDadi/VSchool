// required imports
import React from 'react'
import ReactDOM from 'react-dom'
//CSS file can be imported in index.js or App.js, BUT better to create separate CSS files for each component, put all component files in separate folders, import the .css files into the components' .js files
import './style.css'

//import file (modulizing/component-izing)
    // generally just importing the App.js file, everything else will get 'linked' to App.js (imports/exports)
import App from './App'

// Render needs 2 arguments:
//     1. what to render: 
//     2. where to render: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))