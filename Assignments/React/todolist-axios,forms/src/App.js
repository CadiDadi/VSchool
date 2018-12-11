import React, { Component } from 'react'
import axios from 'axios'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
 
class App extends Component {
    constructor(){
        super()
        this.state={
            todos: [],
            title: '',
            description: '', 
            id: ''
        }
    } 
    componentDidMount(){
        axios.get(`https://api.vschool.io/scott/todo`).then(response => {
            console.log(response)
            this.setState({
                todos: response.data
            })
        })
        .catch(err => console.log(err))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        // create new todo object form user's input, saved in state
        const newToDo = {
            title: this.state.title 
        }
        // send new object to database
        axios.post('https://api.vschool.io/scott/todo', newToDo).then(response => {
            this.setState(prevState => {
                return {
                    // can put new todo at beginning or end of list depending on which way you list these 2 in the []
                    todos: [response.data, ...prevState.todos],
                    title: ''
                }
            })
        })
    }
    handleDelete = (id) => {
        // console.log(id)
        axios.delete(`https://api.vschool.io/scott/todo/${id}`).then(response => {
            alert(response.data.msg)
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => todo._id !== id)
                }
            })
        })
    }
    handleEdit = (id, updates) => {
        // console.log(id)
        // console.log(updates)
        axios.put(`https://api.vschool.io/scott/todo/${id}`, updates).then(response => {
            const updatedToDo = response.data
            this.setState(prevState => {
                return {
                    todos: prevState.todos.map(todo => todo._id === id ? updatedToDo : todo)
                }
            })
        })
    }
    render(){
        return(
            <div>
                <ToDoForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    title={this.state.title}
                />
                {this.state.todos.map(todo => 
                    <ToDo 
                        title={todo.title}  
                        description ={todo.description} 
                        completed = {todo.completed} 
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                        id={todo._id}
                        key={todo._id}
                    />
                )}
            </div>  
        )
    }
}

export default App