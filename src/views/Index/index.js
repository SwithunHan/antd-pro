import React, {Component} from 'react'
import {Layout} from "antd";
import "./style.scss"
import Head from "components/Head";
import Content from "../Content";
import Foot from "components/Foot";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout id="wrapper">
                <Head/>
                <Content/>
                <Foot/>
            </Layout>
        )
    }
}

export default Index