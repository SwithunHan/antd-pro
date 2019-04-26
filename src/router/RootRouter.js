import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom"
import {history} from "../history"
import App from "../views/App";
import Nomatch from "views/404"
import Login from "../views/Login";
import Index from "../views/Index";

class RootRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        }
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/app" component={App}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registered" component={Login}/>
                    <Route exact path="/404" component={Nomatch}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}


export default RootRouter;
