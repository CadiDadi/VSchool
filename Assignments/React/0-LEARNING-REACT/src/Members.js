import React from 'react'

//note: use of PROPS: 1. see App.js file for secondary part and 0-REACT-NOTES.md file. 2. alternate methods 
const Members = (props) => {
    console.log(props)
    return (
        <div className='MembersDiv' id={props.id}>
            <h1>Member: {props.name}</h1>
            {/* although not required to run, to prevent console errors, images require alt='' */}
            <img src={props.pic} alt=''/>
        </div>
    )
}
 
export default Members
