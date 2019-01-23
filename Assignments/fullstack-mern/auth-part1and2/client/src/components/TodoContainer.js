import React, { Component } from 'react'
import { withUser } from '../context/UserProvider'
import Todo from './Todo'
import AddTodoForm from './AddTodoForm'

class TodoContainer extends Component {
    constructor(){
        super()
        this.state = {
            title: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewTodo({title: this.state.title})
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <h1>Hello @{ this.props.user.username }</h1>
                <h3>Add A Todo</h3>
                <AddTodoForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                />
                { this.props.todos.map(todo => <Todo {...todo} key={todo._id}/>) }
            </div>
        )
    }
}

export default withUser(TodoContainer)