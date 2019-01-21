import React from 'react'
import { withUser } from '../context/UserProvider'

const Navbar = props => {
    const { token } = props
    return (
        <div>
            { !token && <button>Sign up</button>}
            { token && <button onClick={props.logout}>Logout</button> } 
        </div>
    )
}

export default withUser(Navbar)