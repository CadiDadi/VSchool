import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Broken from './Broken'
import Contact from './Contact'
import ErrorBoundary from './ErrorBoundary'


class App extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/broken">Broken Route</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" render={ props => 
                                                    <ErrorBoundary>
                                                        <About {...props} />
                                                    </ErrorBoundary>}/>
                    <Route path="/broken" render={ props => 
                                                    <ErrorBoundary>
                                                        <Broken {...props} />
                                                    </ErrorBoundary>}
                    />
                </Switch>
            </div>
        )
    }
}

export default App