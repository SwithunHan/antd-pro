import React, {Component} from 'react'
import {Layout} from 'antd';
import LoginHead from "components/LoginHead";

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <LoginHead/>

            </Layout>
        )
    }
}

export default index