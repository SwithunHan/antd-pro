import React, {Component} from 'react'
import {Layout} from "antd";
import "./style.scss"
import Head from "components/Head";
import Content from "../Content";
import Foot from "components/Foot";
import ListNav from "components/ListNav";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout id="wrapper">
                <Head/>
                <Layout>
                    <ListNav/>
                    <Content/>
                </Layout>
                <Foot/>
            </Layout>
        )
    }
}

export default Index