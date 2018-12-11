import React, { Component } from 'react'
import StarWarsForm from './StarWarsForm'
import Character from './Character'

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            lightsaber: '',
            characters: []
        }
    } 
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            //name in brackets - grabs any element by it's name defined in the form
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newChar = {
            name: this.state.name,
            lightsaber: this.state.lightsaber
        }
        this.setState(prevState => {
            return {
                //using Spread ... makes it one array that can be 'accessed' (mapped/xxx over)
                characters: [...prevState.characters, newChar],
                name: '',
                lightsaber: ''
            }
        })
    }
    render(){
        return (
            <div>
                <StarWarsForm 
                    name={this.state.name}
                    lightsaber={this.state.lightsaber}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <div>
                    {/* setting up unique id */}
                    { this.state.characters.map((char, i) => 
                        <Character 
                            key={char.name + i} 
                            name={char.name} 
                            // backgroundColor: lightsaber (equals lightsaber because we are are making lightsaber values COLORS)
                            lightsaber={char.lightsaber}/>) 
                    }
                </div>
            </div>
        )
    }
}

export default App