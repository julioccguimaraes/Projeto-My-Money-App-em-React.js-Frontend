import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

export default props => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard}></Route>
            <Route path='/billingCycles' component={BillingCycle}></Route>
            <Redirect from='*' to='/'></Redirect>
        </Router>
    )
}