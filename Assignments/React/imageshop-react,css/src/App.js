import React from 'react'

import Navbar from './Navbar'
import Items from './Items'
import Footer from './Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <h1 id='appH1'>Nature Poster Shop</h1>
            <Items />
            <Footer />
        </div>
    )
}
 
export default App
