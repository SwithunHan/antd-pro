import React, {Component} from 'react'
import {Layout} from 'antd';
import "./style.scss"
const {Footer} = Layout;

class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Footer id="foot" style={{textAlign: 'center'}}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        )
    }
}

export default Foot