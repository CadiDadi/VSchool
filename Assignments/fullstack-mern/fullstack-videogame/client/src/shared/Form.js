import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            //instead of using hardcoded objects (like name, videogame), this dynamically allows each form we create to determine, which makes this form a Sharable Form Template
            userInputs: props.userInputs
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => {
            return {
                userInputs: {
                    //keep everything in the item except...
                    ...prevState.userInputs,
                    //...for the properties we change
                    [name]: value
                }
            } 
        })
    }
    
    handleSubmit = e => {
        //prevent default here but not on handleChange
        e.preventDefault()
        this.props.submit(this.state.userInputs)
        this.setState({ 
            userInputs: this.props.userInputs 
        })
    }

    render(){
        // the render in this line is a function we are calling. it is defined in App.js-render-return-Form. It must be called render, but not same as the parent render
        return this.props.render({
                userInputs: this.state.userInputs,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange
        })
    }
}

export default Form







