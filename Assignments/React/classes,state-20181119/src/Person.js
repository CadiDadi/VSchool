import React, { Component } from 'react'

class Person extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }
    logName = () => {
        console.log(this.props.name)
    }
    addOne = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    minusOne = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    times2 = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter * 2
            }
        })
    }
    changeNum = () => {
        this.setState({
            counter: 10
        })
    }
    render(){
        return (
            <div onClick={this.logName}>
                <h1>{this.props.name}</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.minusOne}>-</button>
                <button onClick={this.times2}>*2</button>
                <button onClick={this.changeNum}>change counter to 10</button>
            </div>
        )
    }
}

export default Person