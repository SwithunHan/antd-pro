import React, {Component} from 'react'
import {Layout, Menu,} from 'antd';
import logo from "../../statics/images/logo.svg"
import "./style.scss"
import {Link} from "react-router-dom";

const {Header} = Layout;

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <Header className="header">
                <Link className="logo" to="/">
                    <img src={logo} alt=""/>
                </Link>
                {
                    this.props.location.pathname !== "/login" ?
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}
                              className="menu">
                            <Menu.Item key="1"><Link to={"/login"}>登陆</Link></Menu.Item>
                            <Menu.Item key="2">注册</Menu.Item>
                        </Menu>
                        :""
                }

            </Header>
        )
    }
}

export default Head