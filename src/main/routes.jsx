import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";
import AuthOrApp from "./authOrApp";

export default props => {
    return (
        <div className="content-wrapper">
            <Switch>
                <Route exact path='/' component={Dashboard}></Route>
                <Route path='/billingCycles' component={BillingCycle}></Route>
                <Redirect from='*' to="/"></Redirect>
            </Switch>
        </div>
    )
}