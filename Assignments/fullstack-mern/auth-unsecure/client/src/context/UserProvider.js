import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            isAuthenticated: false,
            authErr: ''
        }
    }

    signup = userInfo => {
        axios.post('/auth/signup', userInfo).then(res => {
            // On successful signup/login, add user object to localstorage
            localStorage.setItem("user", JSON.stringify(res.data))
            // Then save user data in context user state
            this.setState({
                console.log(res.data)  //check
                user: res.data,
                isAuthenticated: true,
            })
        })
        .catch(err => this.handleError(err.response.data.errMsg))
    }

    login = userInfo => {
        axios.post('/auth/login', userInfo).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            this.setState({
                user: res.data,
                isAuthenticated: true 
            })
        })
        .catch(err => this.handleError(err.response.data.errMsg))
    }

    // used in the .catch of axios requests on this context and saves the returned
    // error from our server in state, so that on our Auth.js, we can display it.
    handleError = err => {
        this.setState({
            authErr: err
        })
    }

    // Delete user from localStorage & reset user state causing them to be redirected back to the login page
    logout = () => {
        localStorage.removeItem("user")
        this.setState({
            user: {},
            isAuthenticated: false
        })
    }

    // Used on componentDidMount of App.js so that on refresh the user is not automatically logged
    // out 
    verify = () => {
        if(localStorage.getItem("user")){
            this.setState({
                user: JSON.parse(localStorage.getItem("user")),
                isAuthenticated: true 
            })
        }
    }

    render(){
        return (
            <UserContext.Provider
                value={{
                    user: this.state.user,
                    signup: this.signup,
                    login: this.login,
                    authErr: this.state.authErr,
                    isAuthenticated: this.state.isAuthenticated,
                    verify: this.verify,
                    logout: this.logout
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider


export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/> }
    </UserContext.Consumer>
)