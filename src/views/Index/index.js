import React, {Component} from 'react'
import {Layout, Input, List, Table} from "antd"
import {history} from "historys"
import "./style.scss"
import {getComunity, getIndexHouse} from "../../api";

const Search = Input.Search

const columns = [
    {title: "房子名称", dataIndex: "title"},
    {title: "房子链接", dataIndex: "link", render: (name) => <a href={name}>{name}</a>,},
    {title: "小区名称", dataIndex: "community"},
    {title: "建成时间", dataIndex: "years"},
    {title: "房屋类型", dataIndex: "housetype"},
    {title: "房屋面积", dataIndex: "square"},
    {title: "朝向", dataIndex: "direction"},
    {title: "楼层", dataIndex: "floor"},
    {title: "特点", dataIndex: "tag"},
    {title: "总价/万", dataIndex: "totalPrice"},
    {title: "每平米价格/万", dataIndex: "unitPrice"},
    {title: "关注数", dataIndex: "followInfo"},
    {title: "装饰类型", dataIndex: "decoration"},
    {title: "房源状态", dataIndex: "houseState"},
];


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            searchList: false,
            community: [],
            paginationOptions: {
                pageSize: 5
            },
            newHouseInfo: []
        }
    }

    componentDidMount() {
        getIndexHouse()
            .then((data) => {
                this.setState({
                    newHouseInfo: data.results
                })
            })
            .catch(function (e) {
                console.log(e)
            })
    }

    searchCommunity = () => {
        history.push("/home")
    };
    //查询小区信息
    setSearch = (searchValue) => {
        this.setState({
            searchValue
        }, this.getSearchList)
    };
    //联想输入
    getSearchList = () => {
        if (this.state.searchValue.trim()) {
            getComunity(`search=${this.state.searchValue}`)
                .then((data) => {
                    this.setState({
                        community: data.results
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

    render() {
        return (
            <Layout className="Index">
                <h1>leetcode链家房源分析</h1>
                <Layout className="search">
                    <Search
                        placeholder="小区"
                        onSearch={this.searchCommunity}
                        enterButton
                        size="large"
                        value={this.state.searchValue}
                        onChange={(e) => this.setSearch(e.target.value)}
                    />
                    {
                        this.state.community.length > 0 ?
                            <List
                                className="list"
                                bordered
                                size="small"
                                dataSource={this.state.community}
                                pagination={this.state.paginationOptions}
                                renderItem={item => (
                                    <List.Item
                                        onClick={() => this.setState({
                                            searchValue: item.title,
                                            community: []
                                        })}>{item.title}</List.Item>)}
                            /> : ""
                    }

                </Layout>
                <Layout className="communityList">
                    <h2>最新房源信息</h2>
                    <Table columns={columns} dataSource={this.state.newHouseInfo} size="small"
                           pagination={this.state.paginationOptions} bordered={true}/>
                </Layout>
            </Layout>
        )
    }
}

export default Index