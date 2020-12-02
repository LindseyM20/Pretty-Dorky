import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Overworld from "../pages/Overworld";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import NoMatch from "../pages/NoMatch";
import Battle from "../pages/Battle";
import CharContext from "../utils/CharContext";
import Landing from "../pages/Landing/index"

function Application() {
    const user = useContext(UserContext);
    console.log(user ? user.uid : "User is not set yet");
    return (
        <CharContext.Provider value={{
            userID: user ? user.uid : "User is not set yet",
            name: "",
            level: 0,
            strength: 0,
            maxHealth: 0,
            currentHealth: 0,
            handleInputChange: () => { }
        }}>
            {user ?
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {/* <Navbar /> */}
                            <Overworld />
                            {/* <NoMatch /> */}
                        </Route>
                        <Route exact path="/battle">
                            {/* <Navbar /> */}
                            <Battle />
                        </Route>
                    </Switch>
                </Router>

                :
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <SignIn />
                        </Route>
                        <Route exact path="/signUp">
                            <SignUp />
                        </Route>
                        <Route exact path="/landing">
                            <Landing />
                        {/* <Route exact path="/passwordReset">
                            <PasswordReset /> */}
                        </Route>
                        <Route exact path="/overworld">  
                            {/* <Navbar /> */}
                            <Overworld />
                            {/* <NoMatch /> */}
                        </Route>
                        <Route exact path="/battle">
                            {/* <Navbar /> */}
                            <Battle />
                        </Route>
                    </Switch>
                </Router>}
        </CharContext.Provider>
    );
}
export default Application;
