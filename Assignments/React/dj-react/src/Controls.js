import React from 'react'

const Controls = props => {
    return (
        <div className='controls'>
            <button onClick={props.btn1}>Black or White</button>
            <button onClick={props.btn2}>Top 2 Purple</button>
            <button onClick={props.btn3}>Bottom Left - Blue</button>
            <button onClick={props.btn4}>Bottom Right - Green</button>
            {/* 
            <button onClick={props.btn6}>Shrink Box 1</button>
            <button onClick={props.btn7}>Enlarge Box 2</button>
            <button onClick={props.btn8}>xxxxx</button>
            <button onClick={props.btn9}>xxxxx</button> 
            */}
            <button onClick={props.btn5}>Clear All</button>
        </div>
    )
}

export default Controls