import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth'
import TodoContainer from './components/TodoContainer'
import Navbar from './components/Navbar'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={props => <Auth {...props}/>}/>
                    <Route path="/todos"  render={props => <TodoContainer {...props}/>}/>
                </Switch>
            </div>
        )
    }
}

export default App;