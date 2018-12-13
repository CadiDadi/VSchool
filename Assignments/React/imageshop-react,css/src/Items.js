import React from 'react'

import normal1 from './img/normal1.jpg'
import vertical1 from "./img/vertical1.jpg"
import horizontal1 from "./img/horizontal1.jpg"
import normal2 from "./img/normal2.jpg"
import normal3 from "./img/normal3.jpg"
import big1 from "./img/big1.jpg"
import normal4 from "./img/normal4.jpg"
import vertical2 from "./img/vertical2.jpg"
import normal5 from "./img/normal5.jpg"
import normal6 from "./img/normal6.jpg"

const Items = () => {
    return (
        <div class="itemsContainer">
            <div><img src={normal1} alt=""/></div>
            <div class="vertical"><img src={vertical1} alt=""/></div>
            <div class="horizontal"><img src={horizontal1} alt=""/></div>
            <div><img src={normal2} alt=""/></div>
            <div><img src={normal3} alt=""/></div>
            <div class="big"><img src={big1} alt=""/></div>
            <div><img src={normal4} alt=""/></div>
            <div class="vertical"><img src={vertical2} alt=""/></div>
            <div><img src={normal5} alt=""/></div>
            <div><img src={normal6} alt=""/></div>
        </div>
    )
}

export default Items