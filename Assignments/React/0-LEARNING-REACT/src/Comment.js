import React from 'react'
import Profile from './Profile'

//Destructuring-Style1: instead of (props) we have ({user, date, comment}), which come from App.js <Comment />. now we can use {user.name}, {comment}, etc below; insead of having to write in props: {props.user.pic}, {props.date}
const Comment = ({user, date, comment}) => {

    //Destructuring-Style2: - we create this const so instead of writing 'user.name', we can just write 'name', 'pic' on the lines below
    const {name, pic} = user
    return (
        <div>
            {/* inline styling - textColor, and see in Profile.js file, passing it into h1 */}
            <Profile name={name} image={pic} textColor='green'/>       
            <div className='text'>
                {comment}
            </div>
            <div className='date'>
                {date}
            </div>
        </div>  
    )
} 

export default Comment
