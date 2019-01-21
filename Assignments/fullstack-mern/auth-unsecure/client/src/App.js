import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import Home from './components/Home'
import BlogPost from './components/BlogPost'
import { withUser } from './context/UserProvider'

class App extends Component {
    componentDidMount(){
        this.props.verify()
    }

    render(){
        return (  
            <div>
                <Switch>
                    {/* 
                        using render={} allows you to see if user is authenticated before accessing
                        any particular route using a ternary.  Then using 'react-router-dom''s 
                        <Redirect to=""/> component, we can force the user to another page.

                        Below we are checking on login to send them to the Home page if they 
                        are already logged in, and the opposite for the rest of the routes
                        in case they are not.
                    */}
                    <Route exact path="/" render={routerProps => 
                                                    this.props.isAuthenticated 
                                                        ? <Redirect to="/home"/>
                                                        : <Auth {...routerProps}/>}/>
                                                            
                    <Route path="/home" render={routerProps => 
                                                    !this.props.isAuthenticated 
                                                        ? <Redirect to="/"/> 
                                                        : <Home {...routerProps}/>}/>

                    <Route path="/post/:id" render={routerProps => 
                                                    !this.props.isAuthenticated 
                                                        ? <Redirect to="/"/>
                                                        : <BlogPost {...routerProps}/>}/>
                </Switch>
            </div>
        )
    }
}

export default withUser(App)