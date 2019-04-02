import React, {Component} from 'react'
import {Layout, Menu, Icon,} from 'antd';
import {Link} from "react-router-dom";


const {SubMenu} = Menu;
const {Sider} = Layout;

class ListNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                    // theme="dark"
                >
                    <SubMenu key="sub1" title={<span><Icon type="user"/><span>subnav 1</span></span>}>
                        {[1, 2, 3, 4].map((item) => (
                            <Menu.Item key={item}>{"option" + item}</Menu.Item>
                        ))}
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop"/><span>subnav 2</span></span>}>
                        <Menu.Item key="5"><Link to="/housedes">option5</Link></Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification"/><span>subnav 3</span></span>}>
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

        )
    }
}

export default ListNav