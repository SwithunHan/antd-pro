import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
import ColumnChart from "components/ColumnChart"
import ListNav from "components/ListNav";

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
            <Layout>
                <ListNav/>
                <Layout style={{padding: '24px 24px 0'}}>
                    <Content style={{
                        background: '#ffffff', padding: 24, margin: 0, minHeight: 280,
                    }}>
                        <ColumnChart/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home