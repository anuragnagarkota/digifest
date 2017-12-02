import React from 'react'
import {Route, Switch,Redirect} from 'react-router'
import Login from './Login'
import Register from './Register'
export const Public = () => {
    return (
         <Switch>
                <Route path="/auth/login" exact component={Login}/>
				<Route path="/auth/register" exact component={Register}/>
				 <Redirect to="/auth/login"/>
            </Switch>
    )
}
