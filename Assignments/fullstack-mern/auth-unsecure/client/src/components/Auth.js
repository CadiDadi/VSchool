import React, { Component } from 'react'
import { withUser } from '../context/UserProvider'
import AuthForm from './AuthForm'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            toggle: false
        }
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSignup = e => {
        e.preventDefault()
        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(userInfo)
        this.clearInputs()
    }

    handleLogin = e => {
        e.preventDefault()
        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(userInfo)
        this.clearInputs()
    }

    clearInputs = () => this.setState({ username: '', password: '' })
    
    toggler = () => this.setState(prevState => ({ toggle: !prevState.toggle }))
    
    render(){
        console.log(this.props) //check data being passed in
        return (
            <div>
                <div onClick={this.toggler}>
                    <h1>{this.state.toggle ? "Signup" : "Login"}</h1>
                </div>
                { this.state.toggle ?
                    <AuthForm 
                        username={this.state.username} 
                        password={this.state.password} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignup}
                        btnText="Signup"/>
                :
                    <AuthForm 
                        username={this.state.username} 
                        password={this.state.password} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLogin}
                        btnText="Login"/>
                }
                {/* Always displaying error message in case one occurs */}
                <p>{this.props.authErr}</p>
            </div>
        )
    }
}

export default withUser(Auth)