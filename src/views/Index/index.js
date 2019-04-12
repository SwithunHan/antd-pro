import React, {Component} from 'react'
import {Layout, Input, List} from "antd"
import {history} from "historys"
import "./style.scss"
import {getComunity, getIndexHouse} from "../../api";
import HouseTable from "../../components/HouseTable/HouseTable";
import {Link} from "react-router-dom";

const Search = Input.Search


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
            newHouseInfo: [],
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

    searchCommunity = (value) => {
        history.push(`/community/${value}`)
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
            getComunity(`title=${this.state.searchValue}`)
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
                <h1>leetcode链家房源分析<Link to={"/home"}>更多房源数据分析</Link></h1>
                <Layout className="search">
                    <Search
                        placeholder="小区名称"
                        onSearch={value => this.searchCommunity(value)}
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
                    <HouseTable newHouseInfo={this.state.newHouseInfo}
                                paginationOptions={this.state.paginationOptions}/>
                </Layout>
            </Layout>
        )
    }
}

export default Index