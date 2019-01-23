import React from 'react'

const Die = (props) => {
    return (
        <div onClick={() => props.selectDie(props.name)}>
            <p>Die: {props.dice}</p>
        </div>
    )
}

export default Die 