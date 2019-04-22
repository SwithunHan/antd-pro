import React, {Component} from 'react'
import {Layout, Menu,} from 'antd';
import logo from "../../statics/images/logo.svg"
import "./style.scss"
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react"
import {history} from "../../history";

const {Header} = Layout;

@inject("loginStore")
@observer
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        this.props.loginStore.setToken("");
        this.props.loginStore.setUsername("");
        history.replace("/");
    };

    render() {
        return (
            <Header className="header">
                <Link className="logo" to="/">
                    <img src={logo} alt=""/>
                </Link>
                {
                    this.props.loginStore.token !==""
                        ? <div className="menu"><span>{this.props.loginStore.username}</span>
                            <a href="javascript:void(0)" onClick={this.logout}>退出登陆</a></div>
                        : this.props.location.pathname !== "/login" && this.props.location.pathname !== "/registered" ?
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}
                              className="menu">
                            <Menu.Item key="1"><Link to={"/login"}>登陆</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={"/registered"}>注册</Link></Menu.Item>
                        </Menu>
                        : ""

                }

            </Header>
        )
    }
}

export default Head