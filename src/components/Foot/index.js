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
                leetcode链家房源分析 ©2019 Created by 筱阿呆
            </Footer>
        )
    }
}

export default Foot