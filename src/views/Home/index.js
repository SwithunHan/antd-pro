import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
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
                <Layout style={{padding: '24px 24px 0'}}>
                    <Content style={{
                        background: '#ffffff', padding: 24, margin: 0, minHeight: 280,
                    }}>
                        <Chart/>
                        hello world!!
                    </Content>
                </Layout>
        )
    }
}

export default Home