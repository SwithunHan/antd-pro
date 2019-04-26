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
                    name: "数量分析",
                    subNav: [
                        {
                            name: "各行政区小区数量",
                            link: "/"
                        },
                        {
                            name: "各行政区房屋数量",
                            link: "/"
                        },
                        {
                            name: "各行政区房屋成交数量",
                            link: "/"
                        },
                        {
                            name: "各行政区房屋户型数量",
                            link: "/"
                        },
                        {
                            name: "各路地铁周围房子数量",
                            link: "/"
                        }
                    ]
                },
                {
                    name: "价格分析",
                    subNav: [
                        {
                            name: "各行政区房屋平均价格",
                            link: "/"
                        },
                        {
                            name: "房屋沿地铁价格对比",
                            link: "/"
                        },
                        {
                            name: "房屋沿地铁价格对比",
                            link: "/"
                        }
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