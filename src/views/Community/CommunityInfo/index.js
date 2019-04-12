import React, {Component} from 'react'
import {Layout} from "antd";
import "./style.scss"
import noImg from "static/images/noImg.png"

const columns = [
    {title: "小区名称", dataIndex: "title"},
    {title: "链接地址", dataIndex: "link"},
    {title: "区域", dataIndex: "district"},
    {title: "商圈", dataIndex: "bizcircle"},
    {title: "地铁站", dataIndex: "tagList"},
    {title: "在售房屋数量", dataIndex: "onsale"},
    {title: "在租房屋数量", dataIndex: "onrent"},
    {title: "建造年份", dataIndex: "year"},
    {title: "房屋类型", dataIndex: "housetype"},
    {title: "物业费", dataIndex: "cost"},
    {title: "物业公司", dataIndex: "service"},
    {title: "开发商", dataIndex: "company"},
    {title: "楼房栋数", dataIndex: "building_num"},
    {title: "房屋总数", dataIndex: "house_num"},
    {title: "平均价格", dataIndex: "price"},
];

class CommunityInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout className="CommunityInfo">
                {
                    false ? <Layout className="commmunityImg">
                            <img src={this.props.community.img} alt=""/>
                        </Layout>
                        : <Layout className="commmunityImg">
                            <img src={noImg} alt=""/>
                        </Layout>
                }
                {
                    this.props.community
                        ? <Layout className="info">
                            <ul>
                                {
                                    columns.map((infoItem,index) => (
                                        <li key={index}>
                                            <span>{infoItem.title}</span>
                                            <span>{this.props.community[infoItem.dataIndex]}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Layout>
                        : <Layout className="info not-info">
                            未找到小区
                        </Layout>
                }

            </Layout>
        )
    }
}

export default CommunityInfo