import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";
import App from './app'

export default props => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Dashboard}></IndexRoute>
                <Route path='billingCycles' component={BillingCycle}></Route>
            </Route>

            <Redirect from='*' to='/'></Redirect>
        </Router>
    )
}