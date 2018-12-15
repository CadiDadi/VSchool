import React, { Component } from 'react'
import Person from './Person'

const people = ["Steve", "Joe", "John"]

// Functional/Display/Stateless component
const App = () => {
    const mappedPeople = people.map(name => <Person name={name}/>)
    return (
        <div>
            {mappedPeople}
        </div>
    )
}

export default App

// notes

// Stateful component/Class component
    // Two reasons to use a class component
        // - State
        // - Lifecycle Methods
// class App extends Component {
//     constructor(){
//         // Calls on Component Class to learn how to apply 'this' on class properties
           // required within Classes
//         super()
//              // state - whatever state settings go here
//     }
//     consoleName = () => {
//         console.log(this.props.name)
//     }    
//     render(){
//         return (
//             <div onClick={this.consoleName}>
//                 <h1>{this.props.name}</h1>
//             </div>
//         )
//     }
// }

