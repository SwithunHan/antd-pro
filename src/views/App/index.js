import React, {Component} from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import Home from "views/Home";
import {Layout} from "antd";
import Head from "../../components/Head";
import Foot from "../../components/Foot";
import Community from "../Community";
import requireAuth from "utils/requireAuth";
import {inject, observer} from "mobx-react";

@inject("loginStore")
@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout id="wrapper">
                <Route component={Head}/>
                <div className="content">
                    <Switch>
                        <Route path="/app/content"
                               component={props => (requireAuth(Home, props, this.props.loginStore.token))}/>
                        <Route path="/app/community/:comName" component={Community}/>
                        <Redirect to="/404"/>
                    </Switch>
                </div>
                <Route component={Foot}/>
            </Layout>
        )
    }
}

export default App