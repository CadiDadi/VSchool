


https://coursework.vschool.io/react-context/

React Context
08 OCTOBER 2018 on React, JavaScript, Web Applications, Advanced
Tools: React

Overview
Probably the most concise high-level description of Context comes from the ReactJS docs themselves:

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

This sounds amazing, and it is! However, I want to clear up a common misconception about Context: Context is not a state management system. Or, at least by itself it isn't.

The goal of this article is to familiarize yourself with how Context works, and show you how to use Context to make a globally available 'state' accessible directly from anywhere in the component tree.

Guide
Before we begin go ahead and add the following into your App.css:

.dark-header {
    text-align: center;
    background-color: #333;
    height: 100vh;
    margin: -25px;
    padding: 50px;
    color: #b5b51e;
}

.light-header {
    text-align: center;
    background-color: white;
    height: 100vh;
    margin: -25px;
    padding: 50px;
    color: #333;
}
Ok, now let's start with how to make a Context. React provides a method called createContext which will generate a composite component made up of two smaller components: Provider and Consumer.

//index.js
export const {Consumer, Provider} = React.createContext()
Provider is responsible for holding data, while Consumer is responsible for accessing it.

//index.js
//Provider can be given a default 'value' prop and makes it available to the tree via its children
ReactDOM.render(
  <Provider value={{theme: "dark"}}>
    <App />
  </Provider>,
  document.getElementById("root")
)
//Header.js
import React from 'react';
import {Consumer} from './index';

const Header = props => (
//Consumer exposes its value through props.children
  <Consumer>
  {value => (
    <div className={`${value.theme}-header`}>
        <h1>Wicked Rad Header</h1>
        <button>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
  )}
  </Consumer>
)
If Header were a class-based component, it would look like this

//Header.js
import React, {Component} from 'react';
import {Consumer} from './index';

class Header extends Component {
render(){
    return (
      <Consumer>
      {value => (
        <div className={`${value.theme}-header`}>
            <h1>Wicked Rad Header</h1>
            <button>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
        </div>
      )}
      </Consumer>
    )
 }
}
Note that no matter how far down the tree Header is, as long as we wrap the Consumer around it, the theme is immediately available. No prop-drilling!

However, be aware that there is no inherent way to change the theme value yet. It's stuck on dark mode.

We therefore have no choice but to make a class component that maintains a theme state:

import React, {Component} from 'react';
import {Provider} from './index';

class ThemeProvider extends React.Component{
  constructor(){
    super()
    this.state = {
     theme: "dark"
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme(){
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }
  render(){
    const props = {
      toggleTheme: this.toggleTheme,
      ...this.state
    }
    return (
    //return the theme Provider and it's children
      <Provider value={props}>
        {this.props.children}
      </Provider>
    )
  }
}
Now you can wrap the App in the ThemeProvider instead:

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
Now, let's adjust the Header a little bit by adding the toggletheme function to the onclick listener:

const Header = props => (
  <Consumer>
  {value => (
    <div className={`${value.theme}-header`}>
        <h1>Wicked Rad Header</h1>
        <button onClick={value.toggleTheme}>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
  )}
  </Consumer>
)
Your application now has a universal theme which can be toggled back and forth by clicking a single button!

Final Touch
Let's be honest, the Header is pretty ugly looking. All those nested curly braces and parentheses are difficult to interpret. One way to fix this is to abstract the Consumer away to a higher order component called withTheme:

//This code will go at the bottom of your ThemeProvider.js file

export const withTheme = C => props => (
  <Consumer>
    {value => <C {...value}{...props}/>}
  </Consumer>
)
The Header can be refactored as such:

import React from 'react'
//Import withTheme into your file
import {withTheme} from './ThemeProvider'

const Header = ({theme, toggleTheme}) => (
    <div className={`${theme}-header`}>
        <h1>Wicked Rad Header</h1>
        <button onClick={toggleTheme}>{theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
)
//call withTheme with Header as an argument, and all of the values inside of the Consumer will be available via props

export default withTheme(Header)
Multiple Contexts
Handling authentication, themes, and API data can all be maintained by independent contexts. To use them simultaneusly simply stack the providers like this:

<AuthProvider>
  <ThemeProvider>
    <App/>
  </ThemeProvider>
</AuthProvider>
To consume two different contexts from the same component, compose the HOC's:

export default withAuth( withTheme(MyComponent) )
Summary
React Context is a very accessible and powerful API for managing state across multiple components. Separate chunks of state can be maintained in individual components and then exposed through the Provider and Consumer.

Exercises
TBD
Further Reading
Context - ReatJS docs - https://reactjs.org/docs/context.html#when-to-use-context
React's New Context API - Kent C. Dodds - https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b