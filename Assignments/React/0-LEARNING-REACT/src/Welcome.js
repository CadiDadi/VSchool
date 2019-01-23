import React from 'react'

//note props (see 0-REACT-NOTES.md file)
const Welcome = (props) => {
    console.log(props)
    return (
        <div className='WelcomeDiv' id={props.id}>
            <h1>Welcome: {props.name}</h1>
            {/* although not required to run, to prevent console errors, images requ */}
            <img src={props.pic} alt=''/>
        </div>
    )
}
export default Welcome