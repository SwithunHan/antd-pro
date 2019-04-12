import React, {Component} from 'react'
import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";


const {SubMenu} = Menu;
const {Sider} = Layout;

class ListNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    name: "房屋数量分析",
                    subNav: [
                        {
                            name: "房屋行政区数量对比",
                            link: "/"
                        },
                        {
                            name: "房屋沿地铁数量对比",
                            link: "/"
                        }
                    ]
                },
                {
                    name: "房屋价格分析",
                    subNav: [
                        {
                            name: "房屋行政区价格对比",
                            link: "/"
                        },
                        {
                            name: "房屋沿地铁价格对比",
                            link: "/"
                        }
                    ]
                },
                {
                    name: "房屋户型分析",
                    subNav: [
                        {
                            name: "行政区内户型数量",
                            link: "/"
                        },
                    ]
                },
            ]
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Sider width={250} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['second-nav-00']}
                    defaultOpenKeys={['first-nav-0']}
                    style={{height: '100%', borderRight: 0}}
                >
                    {
                        // 一级目录
                        this.state.navList.map((firstItem, firstIndex) => (
                            <SubMenu key={`first-nav-${firstIndex}`} title={<span>{firstItem.name}</span>}>
                                {firstItem.subNav.map((secondItem, secondIndex) => (
                                    //二级目录

                                    <Menu.Item key={`second-nav-${firstIndex}${secondIndex}`}>
                                        <Link to={secondItem.link}/>{secondItem.name}
                                    </Menu.Item>

                                ))}
                            </SubMenu>
                        ))
                    }
                </Menu>
            </Sider>
        )
    }

}

export default ListNav