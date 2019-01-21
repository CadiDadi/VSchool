import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import TodoContainer from './components/TodoContainer'
import Navbar from './components/Navbar'
import ProtectedRoute from './shared/ProtectedRoute'
import { withUser } from './context/UserProvider'


class App extends Component {
    render() {
        const { token } = this.props
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route 
                        exact path="/" 
                        render={props => token 
                            ?   <Redirect to="/todos"/> 
                            :   <Auth {...props}/>}/>
                    <ProtectedRoute 
                        token={token}
                        redirectTo="/"
                        component={TodoContainer}
                        path="/todos"
                    />
                </Switch>
            </div>
        )
    }
}

export default withUser(App);