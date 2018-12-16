import React from 'react'
//we name the data we want 'people'
import people from './data.json'
import Person from './Person'


// Stateless
// Functional Component / Display Component
const App = () => {
    //this can be done here & call mappedPeople below, or do it all within return()...this way looks a little cleaner
    const mappedPeople = people.data.map(person => 
                            <Person 
                                key={person.id} 
                                name={person.name}
                                friends={person.friends} 
                                age={person.age}/>)
    return (
        <div>
            { mappedPeople }
        </div>
    )
}

export default App 