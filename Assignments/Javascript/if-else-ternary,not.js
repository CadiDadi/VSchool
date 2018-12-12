// SEPARATED IN 2 FILES
// ------------------------

// ------------------------
// jokes file:
// ------------------------

import React from "react"

function Joke(props) {
    return (
        <div>
            {/* two different methods of returning desired outcome of the QUESTION: 1. if/else-ternary, 2. if not, then */}
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke

// ------------------------
// App.js file:
// ------------------------

import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />          
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />            
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />           
        </div>
    )
}

export default App



