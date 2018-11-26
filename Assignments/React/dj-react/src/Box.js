import React from 'react'

const Box = props => {
    return (
        <div
            className='box'
            style={{
                backgroundColor: props.boxColor,
                width: props.boxWidth
            }}
        >
        </div>
    )

}

export default Box