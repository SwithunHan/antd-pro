import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom"
import {inject, observer} from "mobx-react";
import {history} from "../history"
import Login from "views/Login"
import HouseDes from "views/HouseDes"
import Index from "views/Index";
import requireAuth from "utils/requireAuth";
import {Layout} from "antd";
import Foot from "components/Foot";
import Head from "components/Head";
import Home from "views/Home";
import Community from "../views/Community";


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
                <Layout id="wrapper">
                    <Route component={Head}/>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path="/home" component={props => requireAuth(Home, props, this.props.loginStore.token)}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/registered" component={Login}/>
                            <Route path="/community/:comName" component={Community}/>
                            <Route path="/housedes"
                                   component={props => requireAuth(HouseDes, props, this.props.loginStore.token)}/>
                        </Switch>
                    </div>
                    <Route component={Foot}/>
                </Layout>
            </Router>
        );
    }
}


export default RootRouter;
