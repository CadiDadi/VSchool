import React from 'react'

const Hitlist = props => {
    const { name, image} = props
    return(
        <div>
            <h1>Name: {name}</h1>
            <img src={image} alt="img" />
        </div>
    )
}

export default Hitlist