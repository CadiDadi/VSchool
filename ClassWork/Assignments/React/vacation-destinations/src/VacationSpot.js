import React from 'react'

const VacationSpot = ( { place, price, timeToGo } ) => {
    
    //declaring timeClass without a value, which is set based on if statement
    let timeClass
    if(timeToGo === 'Spring'){
        timeClass = 'backgroundGreen'
    } else if(timeToGo === 'Summer') {
        timeClass = 'backgroundYellow'
    } else if(timeToGo === 'Fall') {
        timeClass = 'backgroundBrown'
    } else {
        timeClass = 'backgroundGrey'
    }

    let priceValue
    if(price < 500){
        priceValue = '$'
    } else if (price < 1000){
        priceValue = '$$'
    } else {  
        priceValue = '$$$'
    }

    return (
        <div>
            <div className={` spot ${timeClass} `}>
                <h1>{place}</h1>
                <h3>Trip Price: ${price}</h3>
                <h4>Cost: {priceValue}</h4>   
                <h3>Best Time of Year to Visit: </h3>
                <h3>{timeToGo}</h3>
            </div>
        </div>
    )
}

export default VacationSpot