import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()
const todoAxios = axios.create()

todoAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

// Authentication pt. 2
    // 1. post -> credentials
    // 2. Store user object and token in localstorage && Context state
    // 3. Create our own instance of axios and attach the Token to every request's header
    // 4. User can log out, which removes localstorage data and reset's state

export default class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            // Set initial state to the user object and token from localstorage
            // so they do not have to re-login.
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            todos: [],
            errMsg: ""
        }
    }
  
    // what things will the user need to be able to do
    signup = credentials => {
        // this return allows you to say: this.props.signup().then()
        return axios.post('/auth/signup', credentials).then(res => {
                    // destructure 'user' and 'token' from the res.data object
                    const { user, token } = res.data
                    // Add an item to local storage called "user", and set it equal to a
                    // json object of the user
                    localStorage.setItem("user", JSON.stringify(user))
                    // Add token string to user's local storage
                    localStorage.setItem("token", token)
                    // using object literals, set 'user' and 'token' in state
                    this.setState({ user, token })
                    this.getUserTodos()
                    // Passes the response to the .then of the signup function call
                    return res
                })
                .catch(err => this.authErrHandler(err.response.data.errMsg))
    }

    login = credentials => {
        return axios.post('/auth/login', credentials)
                .then(res => {
                    const { user, token } = res.data
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("token", token)
                    this.setState({ user, token })
                    this.getUserTodos()
                    return res
                })
                .catch(err => this.authErrHandler(err.response.data.errMsg))
    }

    authErrHandler = err => {
        this.setState({
            errMsg: err
        })
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({
            user: {},
            token: "",
            todos: []
        })
    }

    getUserTodos = () => {
        todoAxios.get('/api/todo').then(res => {
            this.setState({
                todos: res.data
            })
        })
        .catch(err => console.log(err))
    }

    addNewTodo = newTodo => {
        todoAxios.post('/api/todo', newTodo).then(res => {
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, res.data]
                }
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup:       this.signup,
                    login:        this.login,
                    logout:       this.logout,
                    addNewTodo:   this.addNewTodo,
                    errMsg:       this.state.errMsg
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}


export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/> }
    </UserContext.Consumer>
)