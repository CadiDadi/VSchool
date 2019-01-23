import React from 'react'
import { withTheme } from './ThemeProvider'

const Header = props => {
    return(
            <div className={`${props.theme}-header`}>
                <h1>My Context Header</h1>
                <button onClick={props.toggleTheme}>{ props.theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark'}</button>
            </div>
    )
}

export default withTheme(Header)

// Notes (see above)
    // value.theme = dark or light from style.css, -header applies to both, we are just changing the css class - either .dark-header  or .light-header 

