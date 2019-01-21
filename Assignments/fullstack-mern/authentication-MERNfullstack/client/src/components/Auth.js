import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { withUser } from '../context/UserProvider'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            formToggle: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSignup = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials).then(() => {
            // This pushes the user to the TodosContainer component
            // this.props.history.push('/todos')
        })
        this.setState({ username: '', password: '' })
    }

    handleLogin = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials).then(() => {
            // This pushes the user to the TodosContainer component
            // this.props.history.push('/todos')
        })
        this.setState({ username: '', password: '' })
    }

    toggler = () => {
        this.setState(prevState => ({ formToggle: !prevState.formToggle }))
    }

    render() {
        return (
            <div>
                <div onClick={this.toggler}>
                    <h1>{this.state.formToggle ? "Sign Up" : "Login" }</h1>
                </div>
                { this.state.formToggle 
                    ?   <AuthForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignup}
                            username={this.state.username}
                            password={this.state.password}
                            btnText="Sign Up" 
                        />
                    :   <AuthForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLogin}
                            username={this.state.username}
                            password={this.state.password}
                            btnText="Login" 
                        />
                }
                <p>{this.props.errMsg}</p>
            </div>
        )
    }
}

export default withUser(Auth)