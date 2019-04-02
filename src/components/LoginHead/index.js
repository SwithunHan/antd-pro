import React, {Component} from 'react'
import logo from "static/images/logo.svg";
import {Layout} from "antd";
import {Link} from "react-router-dom";

const {Header} = Layout;
class LoginHead extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Header className="header">
                <Link className="logo" to="/">
                    <img src={logo} alt=""/>
                </Link>
            </Header>
        )
    }
}

export default LoginHead