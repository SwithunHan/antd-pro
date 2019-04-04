import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom"
import {inject, observer} from "mobx-react";
import {history} from "../history"
import Login from "views/Login"
import HouseDes from "views/HouseDes"
import Index from "views/Index";
import requireAuth from "../utils/requireAuth";


@inject("loginStore")
@observer
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
                        <Route path="/home" component={Index}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/housedes" component={props => requireAuth(HouseDes, props, this.props.loginStore.token)}/>
                    </Switch>
                </Router>
        );
    }
}



export default RootRouter;
