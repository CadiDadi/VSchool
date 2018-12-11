import React, { Component, Fragment } from 'react'

class ToDo extends Component { 
    constructor(){
        super()
        this.state = {
            isEditing: false
        }
    }
    editToggler = () => {
        this.setState(prevState => {
            return{
                isEditing: !prevState.isEditing
            }
        })
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        // grab new title text from state and save it as an object
        const updates = {
            title: this.state.title
        }
        //send TODO id and update object to handle edit in App
        this.props.handleEdit(this.props.id, updates)
        //reset user input to empty string
        this.setState({
            title: ''
        })
        //close edit form when user submits edit
        this.editToggler()
    }
    render(){
        return(
            // fragment is imported (above); it acts as a div (without needing a div) & gets 'stripped' away
            <Fragment>
                { 
                    this.state.isEditing ?
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                value={this.state.title}
                                onChange={this.handleChange}
                                name='title' 
                                placeholder={this.props.title} />
                            <button>Submit Edit</button>
                        </form>
                        <button onClick={this.editToggler}>Close</button>
                    </div>
                :
                    <div>
                        <h1>title: {this.props.title}</h1>
                        <h3>{this.props.description}</h3>
                        {/* completed is a boolean, to be able to print it, must turn it into a string */}
                        <h3>{this.props.completed.toString()}</h3>
                        <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                        <button onClick={this.editToggler}>Edit</button>
                    </div>
                }
            </Fragment>
        )
    }

}
 
export default ToDo