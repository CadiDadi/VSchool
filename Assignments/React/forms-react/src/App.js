import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fName: '',
      lName: '',
      age: '',
      people: [] 
    }
  } 
  //event often shorthanded 'e'
  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      //name in brackets - grabs any element by it's name defined in the form
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const newPerson = {
      fName: this.state.fName,
      lName: this.state.lName,
      age: this.state.age
    }
    this.setState(prevState => {
      return {
        people: [...prevState.people, newPerson]
      }
    })
    // console.log(this.state.people)
    // alert(`This person: ${this.state.fName} ${this.state.lName} is ${this.state.age} years old.`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input  type="text"
                placeholder='First Name'
                onChange={this.handleChange}
                value={this.state.fName}
                name='fName'  />
        <input  type="text"
                placeholder='Last Name'
                onChange={this.handleChange}
                value={this.state.lName}
                name='lName'  />
        <input  type="number"
                placeholder='Age'
                onChange={this.handleChange}
                value={this.state.age}
                name='age'  />
        <button>Submit</button>
      </form>
    )
  }
}

export default App
