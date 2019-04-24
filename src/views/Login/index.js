import React, {Component} from 'react'
import {Button, Form, Icon, Input} from 'antd';
import "./style.scss"
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react"
import {login, registered} from "api/index";
import {history} from "../../history"

@inject("loginStore")
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.props.match.path === "/login") {
                    // 登陆
                    login(values).then(data => {
                        localStorage.setItem("token", data.token)
                        localStorage.setItem("username", values.username)
                        this.props.loginStore.setUsername(values.username)
                        this.props.loginStore.setToken(data.token)
                        history.replace("/content")
                    })
                } else {
                    // 注册
                    registered(values).then(data => {
                        console.log(data)
                        if (data.token) {
                            localStorage.setItem("token", data.token)
                            localStorage.setItem("username", data.username)
                            this.props.loginStore.setUsername(data.username)
                            this.props.loginStore.setToken(data.token)
                            history.replace("/content")
                        } else {
                            alert(data.username)
                        }

                    })
                }

            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {rules: [{required: true, message: '请输入密码!'}],})(<Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                        placeholder="密码"/>)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {
                            this.props.match.path === "/login"
                                ? "登陆"
                                : "注册"
                        }
                    </Button>
                    {
                        this.props.match.path === "/login"
                            ? <div>
                                <span>没有账号？</span>
                                <Link to="/registered">立即注册</Link>
                            </div>
                            : (<div>
                                <span>已有账号？</span>
                                <Link to="/login">直接登陆</Link>
                            </div>)
                    }

                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);
export default WrappedNormalLoginForm