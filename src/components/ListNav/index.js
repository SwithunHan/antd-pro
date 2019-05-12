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
                    name: "区域分析",
                    subNav: [
                        {
                            name: "二手房数量对比",
                            link: "/app/content"
                        },
                        {
                            name: "平均房价对比",
                            link: "/app/content/area/average"
                        },
                        {
                            name: "二手房总价对比",
                            link: "/app/content/area/total"
                        },
                    ]
                },
                {
                    name: "面积分析",
                    subNav: [
                        {
                            name: "面积与数量相关性",
                            link: "/app/content/prop/number"
                        },
                        {
                            name: "面积与价格相关性",
                            link: "/app/content/prop/price"
                        },
                    ],
                },
                {
                    name: "户型分析",
                    subNav: [
                        {
                            name: "各行政区房屋类型数量",
                            link: "/app/content/type/number"
                        },
                    ],
                },
                {
                    name: "装修情况分析",
                    subNav: [
                        {
                            name: "装修情况与数量",
                            link: "/app/content/decoration/number"
                        },
                        {
                            name: "装修情况与房价",
                            link: "/app/content/decoration/price"
                        },
                    ],
                },
                {
                    name: "年份分析",
                    subNav: [
                        {
                            name: "年份与数量",
                            link: "/app/content/year/number"
                        },
                        {
                            name: "年份与价格",
                            link: "/app/content/year/price"
                        },
                    ],
                },
                {
                    name: "楼层分析",
                    subNav: [
                        {
                            name: "各楼层房屋数量",
                            link: "/app/content/floor/number"
                        },
                    ],
                },
                {
                    name: "网签数据",
                    subNav: [
                        {
                            name: "网签数据显示",
                            link: "/app/content/websign/number"
                        },
                    ],
                },
                {
                    name: "楼市动态信息",
                    subNav: [
                        {
                            name: "楼市动态",
                            link: "/app/content/dynamic/info"
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