import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Overworld from "./Overworld";
import PasswordReset from "./PasswordReset";
import NoMatch from "./NoMatch";
import Battle from "./Battle";

function Application() {
    const user = null;
    return (
        user ?
            <Overworld />
            :
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route exact path="/signUp">
                    <SignUp />
                </Route>
                <Route exact path="/passwordReset">
                    <PasswordReset />
                </Route>
                <Route exact path="/overworld">
                    <Overworld />
                    {/* <NoMatch /> */}
                </Route>
                <Route exact path="/battle">
                    <Battle />
                </Route>
            </Switch>
        </Router>

    );
}
export default Application;
