import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import BlogProvider from './context/BlogProvider'


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <BlogProvider>
                <App />
            </BlogProvider>
        </UserProvider>
    </BrowserRouter>, 
document.getElementById('root'))