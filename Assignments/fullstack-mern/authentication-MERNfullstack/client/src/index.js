import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserProvider from './context/UserProvider'
import { BrowserRouter } from 'react-router-dom'

// 1. Show authentication errors to the user
// 2. Protect Routes so user cannot access secured pages
// 3. Conditional Views

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>, 
document.getElementById('root'))