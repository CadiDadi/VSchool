import React from 'react'

const Component = (props) => {
    return (
        <div>
            <div style={{backgroundColor: props.backgroundColor, color: props.color, textAlign: props.textAlign, margin: props.margin, padding: props.padding}}>
                
                <h1>Title: {props.title}</h1>
                <h3>Genre: {props.genre}</h3>
                <p>Year Produced: {props.year}</p>
            </div>
        </div>
    )
}

export default Component