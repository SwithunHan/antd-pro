import React, {Component} from 'react'
import {Layout} from "antd";
import Head from "components/Head";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <Head/>
            </Layout>
        )
    }
}

export default Index