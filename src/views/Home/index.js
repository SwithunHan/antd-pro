import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
import Head from "components/Head"
import ListNav from "components/ListNav";
import Foot from "components/Foot";
import Chart from "components/Chart"
const {Content} = Layout;

@inject("loginStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout id="wrapper">
                <Head />
                <Layout>
                    <ListNav/>
                    <Layout style={{padding: '24px 24px 0'}}>
                        <Content style={{
                            background: '#ffffff', padding: 24, margin: 0, minHeight: 280,
                        }}
                        >
                            <Chart/>
                        </Content>
                    </Layout>
                </Layout>
                <Foot/>
            </Layout>
        )
    }
}

export default Home