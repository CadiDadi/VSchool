import React from 'react'
import Friend from './Friend'
import PropTypes from 'prop-types'

const Person = (props) => {
    const mappedFriends = props.friends.map((name, i) => 
                                    <Friend 
                                        key={name + i} 
                                        name={name}/>)
    let currentClass
    if(props.age > 50){
        // age over 50 === 'red'
        currentClass = "red-text"
    } else if(props.age <= 50){
        // age 50 or under === 'yellow'
        currentClass = "yellow-text"
    }

    return (
        <div className={`person-container ${currentClass}`}>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <h5>Friends:</h5>
                { mappedFriends }
        </div>
    )
} 

// propTypes check that the correct type of data is used (is name a string, is age a number, etc)
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.string)
}


export default Person