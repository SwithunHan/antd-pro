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
                            link: "/app/content"
                        },
                        {
                            name: "各行政区房屋数量",
                            link: "/app/content/number/house"
                        },
                        {
                            name: "各行政区房屋成交量走势",
                            link: "/app/content/number/clinch"
                        },
                        {
                            name: "各路地铁周围房子数量",
                            link: "/app/content/number/subway"
                        }
                    ]
                },
                {
                    name: "价格分析",
                    subNav: [
                        {
                            name: "各行政区房屋平均价格",
                            link: "/app/content/price/average"
                        },
                        {
                            name: "房屋沿地铁价格对比",
                            link: "/app/content/price/subway"
                        },
                    ],
                },
                {
                    name: "房屋类型分析",
                    subNav: [
                        {
                            name: "各行政区房屋类型",
                            link: "/app/content/type/area"
                        },
                        {
                            name: "房屋沿地铁房屋类型",
                            link: "/app/content/type/subway"
                        },
                    ],
                },
            ],
        }
        if (sessionStorage.getItem("openkeys") === null) {
            sessionStorage.setItem("openkeys", "first-nav-0")
        }
    }

    firstMenu = (e) => {
        let openkeys = [...sessionStorage.getItem("openkeys").split(",")]
        let index = openkeys.indexOf(e.key);
        if (index !== -1) {
            openkeys.splice(index, 1)
        } else {
            openkeys.push(e.key)
        }
        sessionStorage.setItem("openkeys", openkeys.join(","))

    }

    render() {
        return (
            <Sider width={250} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.props.location.pathname]}
                    defaultOpenKeys={sessionStorage.getItem("openkeys").split(",")}
                    style={{height: '100%', borderRight: 0}}
                    onClick={this.handleClick}
                >

                    {
                        // 一级目录
                        this.state.navList.map((firstItem, firstIndex) => (
                            <SubMenu key={`first-nav-${firstIndex}`} title={<span>{firstItem.name}</span>}
                                     onTitleClick={this.firstMenu}>
                                {firstItem.subNav.map((secondItem) => (
                                    //二级目录

                                    <Menu.Item key={secondItem.link}>
                                        <Link to={secondItem.link}>{secondItem.name}</Link>
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