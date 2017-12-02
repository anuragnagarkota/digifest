import React from 'react'
import {Switch, Redirect} from 'react-router'
import {Public, Private} from './Layout'
export default() => (
    <Switch>
        <Public path="/auth"/>
        <Private path="/app"/>
        <Redirect to="/auth"/>
    </Switch>
)
