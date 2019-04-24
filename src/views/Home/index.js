/* eslint-disable no-undef */
import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
import ListNav from "components/ListNav";
import {Route, Switch} from "react-router";
import QuantityCompared from "./QuantityCompared"


@inject("loginStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <ListNav/>
                <Layout style={{padding: '24px 24px 0'}}>
                    <Layout style={{
                        background: '#ffffff',
                        padding: 24,
                        margin: 0,
                        minHeight: 'calc(100vh - 130px)',
                    }}>
                        <Switch>
                            <Route path="/content" exact component={QuantityCompared}/>
                        </Switch>

                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Home