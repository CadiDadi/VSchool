import React from 'react'

const Pet = ({ name, breed }) => {
    return (
    <div>
        <p><b>Name:</b> {name}
        <b> | Breed: </b>{breed}</p>
    </div>
    )
}

export default Pet


