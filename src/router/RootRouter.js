import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom"
import {inject, observer} from "mobx-react";
import {history} from "../history"
import Home from "views/Home"
import Login from "views/Login"
import HouseDes from "views/HouseDes"
import Index from "views/Index";


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
                        <Route path="/home" component={props => requireAuth(Home, props, this.props.loginStore.token)}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/housedes" component={props => requireAuth(HouseDes, props, this.props.loginStore.token)}/>
                    </Switch>
                </Router>
        );
    }
}

//验证登陆

function requireAuth(Layout, props, token) {
    if (false) { // 未登录
        return <Redirect to="/login"/>;
    } else {
        return <Layout {...props} />
    }
}

export default RootRouter;
