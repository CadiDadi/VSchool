import React from 'react'

const Friend = (props) => {
    const styles = { fontSize: '20px'}

    // console.log's friends name
    function logName(){
        console.log(props.name)
    }

    return (
        // we dont want to call our logName function: "logName()"; we just want it there: "logName". if we called it, it would run on initial page load; we want it to only run when the onClick occurs
        <div onClick={logName}>
            <span style={styles}>- {props.name}</span>
        </div>
    )
}

export default Friend