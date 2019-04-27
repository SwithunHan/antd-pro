import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
import ListNav from "components/ListNav";
import {Redirect, Route, Switch} from "react-router";
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
                <Route component={ListNav}/>
                <Layout style={{padding: '24px 24px 0'}}>
                    <Layout style={{
                        background: '#ffffff',
                        padding: 24,
                        margin: 0,
                        minHeight: 'calc(100vh - 130px)',
                    }}>
                        <Switch>
                            <Route exact path="/app/content" component={QuantityCompared}/>
                            <Route exact path="/app/content/number/house" component={QuantityCompared}/>
                            <Route exact path="/app/content/number/clinch" component={QuantityCompared}/>
                            <Route exact path="/app/content/number/subway" component={QuantityCompared}/>
                            <Route exact path="/app/content/price/average" component={QuantityCompared}/>
                            <Route exact path="/app/content/price/subway" component={QuantityCompared}/>
                            <Route exact path="/app/content/type/area" component={QuantityCompared}/>
                            <Route exact path="/app/content/type/subway" component={QuantityCompared}/>
                            <Redirect to="/404"/>
                        </Switch>

                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Home