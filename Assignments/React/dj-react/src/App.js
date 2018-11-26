import React, { Component } from 'react'
import Box from './Box'
import Controls from './Controls'

class App extends Component {
    constructor(){
        super()
            this.state = {
               box1: 'black', 
               box2: 'black', 
               box3: 'black', 
               box4: 'black', 
            }
    }
    blackOrWhite = () => {
        this.setState(prevState => {
            return {
                btn1: !prevState.btn1,
                box1: prevState.box1 === 'white' ? 'black' : 'white',
                box2: prevState.box1 === 'white' ? 'black' : 'white',
                box3: prevState.box1 === 'white' ? 'black' : 'white',
                box4: prevState.box1 === 'white' ? 'black' : 'white',
            }
        })
    }
    topPurple = () => {
        this.setState({
            box1: 'purple',
            box2: 'purple'
        })
    }
    bottomLeftBlue = () => {
        this.setState({
            box3: 'blue'
        })
    }
    bottomRightGreen = () => {
        this.setState({
            box4: 'green'
        })
    }
    clearAll = () => {
        this.setState({
            box1: 'white',
            box2: 'white',
            box3: 'white',
            box4: 'white',

        })
    }
    render(){
        return (
            <div>
                <div className='grid'>
                    <Box boxColor={this.state.box1} />
                    <Box boxColor={this.state.box2} />
                    <Box boxColor={this.state.box3} />
                    <Box boxColor={this.state.box4} />
                </div>
                <Controls
                    btn1={this.blackOrWhite}
                    btn2={this.topPurple} 
                    btn3={this.bottomLeftBlue}
                    btn4={this.bottomRightGreen}
                    btn5={this.clearAll}
                />
            </div>
        )
    }
}

export default App