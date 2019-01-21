import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = props => {
    const { token, redirectTo, component: Component, path, rest } = props
    return ( token
            ? <Route 
                path={path} 
                render={props => <Component {...props}/>}/>
            : <Redirect to={redirectTo}/>
    )
}

export default ProtectedRoute;