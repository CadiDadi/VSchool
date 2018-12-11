import React, { Component } from 'react'
import axios from 'axios'
import Hitlist from './Hitlist'

class App extends Component {
    constructor(){
        super()
        this.state = {
            hitlist: []
        }
    }
    componentDidMount(){
        axios.get(`https://s3.amazonaws.com/v-school/data/hitlist.json`).then(response => {
            this.setState({
                hitlist: response.data
            })
        })
    }
    render(){ 
        return(
            <div>
                { this.state.hitlist.map(item =>
                    <Hitlist
                        name={item.name}
                        image={item.image} />
                )}
            </div>
        )
        // Alternate way to write:      
            // const mappedHitlist = this.state.hitlist.map(item => {             
            //     return(
            //         <Hitlist
            //             name = {item.name}
            //             image = {item.image}
            //         />
            //     )
            // })
            // return(
            //     <div>{mappedHitlist}</div>
            // )
            // const mappedHitList = () => { 
            
        }
    // } 
}
 
export default App