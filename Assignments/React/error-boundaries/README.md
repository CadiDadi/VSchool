v school document:

https://coursework.vschool.io/react-error-boundaries/

additional info:
Error Boundary in React - https://reactjs.org/docs/error-boundaries.html

-----------

React Error Boundaries

Error Boundaries in React help us face a few error handling issues head on. The first issue it helps us with is thrown errors. If an error is thrown inside of a React app, it is likely that part or all of the App will crash leaving you with nothing but a sad white screen to stare at.

Secondly, it is best to remove a feature from the UI if it is not functioning properly. Take for example a service like Venmo (mobile money transfer) had a broken input box where you entered the amount. It would be best of that input box didn't show up at all rather than let the user mistakenly send an incorrect amount.

The code for each example is provided in this write-up so you play with this topic with working examples.

What is an Error Boundary?
Error Boundaries are React components that catch Javascript errors anywhere below them in the component tree. If an Error Boundary catches an error, it will first log the error, and then it will display a fallback UI instead of the crashed component tree.

What errors and when?
Error Boundaries catch most Javascript errors, they are like the javascript catch but for components. Here are the error types they do NOT catch:
- Event Handlers
- Asynchronous code
- Server side rendering
- Errors thrown in the Boundary component itself

Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them

Create a single <ErrorBoundary> component
A class component becomes an error Boundary if it defines a new lifecycle method called componentDidCatch(error, info), or a static method static getDerivedStateFromProps(error). You really only need to make this once (think HOC), and then you can reuse it wherever you need an error boundary in your app.

Let's take a look at what a ErrorBoundary component will look like, and then see it used in two different situations:

import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = { error: null, errorInfo: null }
    }
    
    // For this example we'll just use componentDidCatch, this is only 
    // here to show you what this method would look like.
    // static getDerivedStateFromProps(error){
        // return { error: true }
    // }

    componentDidCatch(error, info){
        this.setState({ error: error, errorInfo: info })
    }

    render() {
        if(this.state.errorInfo){
            return (
                <div className="error-boundary">
                    <summary>Something went wrong</summary>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        { this.state.error && this.state.error.toString() }
                        { this.state.errorInfo.componentStack }
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
Let's break down what is happening here.

First: We need to create a class component, with constructor, super and state.
props is given to constructor and super in case you want to pass props to set this component's initial state.
Second: We envoke the componentDidCatch(error, errorInfo) that expects to receive two parameters, error which is the error, and errorInfo which contains additional error information.
If this lifecycle method is triggered, (meaning if there was an error in one of it's child components), state is set to set the error and its info.
Third: We set up a conditional statement to check if errorInfo in the ErrorBoundary's state has error information, and if so we return a div containing the error information.
We are using the <summary> and <details> html semantic tags that gives you pre-built toggle functionality for the message the <details> contains. Note, these tags may not work on all browsers.
The error is converted to a String so we can use it.
The errorInfo.componentStack allows you to see the failing component stack from the error.
Fourth: If there is no present error in state, we just return this.props.children which refers to whatever component the <ErrorBoundary/> is wrapped around.
Let's implement this first with a button clicker that adds 1 to a number in state. The <App /> component looks like this:

import React, { Component } from 'react'
import Display from './Display'
import Controls from './Controls'

class App extends Component {
    constructor(){
        super()
        this.state = {
            num: 0,
        }
    }

    addOne = () => this.setState(prevState => ({ num: prevState.num + 1 }))

    render() {
        const { addOne } = this
        const { num } = this.state
        return (
            <div>
                <Display num={ num }/>
                <Controls addOne={ addOne }/>
            </div>
        )
    }
}

export default App;
The <Display /> component looks like this:

import React from 'react';

const Display = props => {
    const { num } = props
    // If the current num is greater than 10, throw an error.
    if(num > 10){
        throw new Error("I'm your error! I'm erroring so well!")
    }
    return <h1>{ num }</h1>
};

export default Display;
The <Controls /> component looks like this:

import React from 'react';

const Controls = props => {
    const { addOne } = props
    return (
        <div>
            <button onClick={ addOne }> + </button>
        </div>
    )
};

export default Controls;
In the <Display /> component we are simulating an error when the number is greater than 10. If you run the application right now and click the button to be greater than 10, the application crashes presenting you with a lovely white screen. Wouldn't it be great if the crashing could be contained to the component it occurred in to allow for the rest of the application to keep running?

The answer is yes! This is where ErrorBoundaries perform their magic. In the App.js, import ErrorBoundary from './ErrorBoundary'. Then wrap the <Display/> component in those tags like this:

Screen-Shot-2018-10-24-at-12.19.08-PM

If you now go test the application, you should see a crash error that looks like this:

Screen-Shot-2018-10-24-at-12.20.17-PM

But notice the small text at the bottom:

Screen-Shot-2018-10-24-at-12.20.21-PM

This is purely a message seen in development, so to see what the user would actually see when this error occurred, click the X at the top right.

Now you should see the magic of using an Error Boundary! The component that threw an error and crashed was the only one affected by that crash. You can still click the button (and even see that React state is still updating in React Dev Tools)

Proper Use
A question you may have is 'Where do I put ErrorBoundaries', and the answer is around components themselves. While you can wrap JSX elements and may still get it to work, that is not the intended use. Error Boundaries are meant to render some default JSX in place of the crashed component to allow the website to keep running. So:

Screen-Shot-2018-10-24-at-12.27.37-PM

An Error boundary will visually replace the piece of the UI that is wrapped in its open/close tags. This means you can also wrap your top level <App /> component in the index.js in case anything happens in your top level component.

Using Error Boundaries with react-router-dom
Currently when using react-router-dom, the entire app will crash if the user clicks a link that loads a component with an error. Let's use an <ErrorBoundary /> component to fix this. We will be displaying the error message, but in production you may change your ErrorBoundary div to display something like a "Oops, something went wrong" message to the user.

Here is the index.js and App.js components:

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './style.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('root')
)
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Broken from './Broken'
import Contact from './Contact'


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
                    <Route path="/about" component={About}/>
                    <Route path="/broken" component={Broken}/>
                </Switch>
            </div>
        );
    }
}

export default App
The Home, About, and Contact components look like this, just with the component name and the className being different on each one:

import React from 'react';

const Home = () => {
    return (
        <div className="home">
            HOME
        </div>
    );
};

export default Home;
The <Broken /> component looks like this:

const Broken = () => { throw new Error("The Route is Broken") }

export default Broken;
Lastly, the style.css looks like this:

* {
    margin: 0;
}

a {
    text-decoration: none;
    padding: 5px 10px;
}

.home,
.about,
.contact {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px
}

.home {
    background-color: blue
}

.about {
    background-color: green
}

.contact {
    background-color: purple
}

.error-boundary {
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    font-family: sans-serif;
    background-color: firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.error-boundary summary,
.error-boundary details {
    width: 300px;
    margin: 5px;
    border: 2px solid #222;
    border-radius: 3px;
    padding: 3px;
}

.nav {
    display: flex;
    justify-content: space-around
}
The <Broken/> component is simulating an error that will cause it to crash. If you npm start, you'll be able to navigate around until you click on the Broken Route, wherein which the app will crash, give you the dev error, and then present the blank white screen. Let's use an ErrorBoundary component to fix this issue. Using the same ErrorBoundary component from the first example, import it at the top of your App.js and then change your Broken Route to look like the following using the react-router render method.

Screen-Shot-2018-10-24-at-1.28.01-PM

Now if you navigate around the app and click on the Broken Route, you will get the standard dev error message, but once you close that you will still be able to navigate around the site!

Note: The render method is required when using ErrorBoundaries in your Routes. Meaning, you would not want to wrap the entire route like this:

Screen-Shot-2018-10-24-at-1.33.18-PM

While you can test this and it appears to work, switch the order of the Route components in the switch so that the Broken Route is not the last, like this:

Screen-Shot-2018-10-24-at-1.41.39-PM

Now try to navigate to all of the links. Notice that any Routes after the ErrorBoundary do not render. However, if you now switch that Broken route to use the render method, its order in the routes does not matter.

Screen-Shot-2018-10-24-at-2.43.56-PM

