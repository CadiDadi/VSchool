import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const { name, age, pets } = props
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            {pets.map(pets =>  
            <Pet           
                name={pets.name}
                breed={pets.breed} />
            )}

        </div>
    )
}
 
export default Friend

