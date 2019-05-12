import React, {Component} from 'react'
import "./style.scss"
import {getComunity, getHouse} from "api/index"
import HouseTable from "components/HouseTable/HouseTable";
import {Layout} from "antd";
import CommunityInfo from "./CommunityInfo";
import {history} from "../../history"

class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            community: {},
            paginationOptions: {
                pageSize: 5
            },
            houseList: [],
            loading: true
        }
    }

    componentDidMount() {
        //获取小区信息
        getComunity(`search=${this.props.match.params.comName}`)
            .then((data) => {
                if (data.results[0]) {
                    this.setState({
                        community: data.results[0],
                        loading: false
                    })
                } else {
                    history.replace("/404")
                }

            })
            .catch(e => {
                console.log(e)
            })
        //获取小区房屋信息
        getHouse(`community=${this.props.match.params.comName}`)
            .then((data) => {
                this.setState({
                    houseList: data.results
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <Layout className="Community">
                <h2>小区信息</h2>
                <CommunityInfo community={this.state.community} loading={this.state.loading}/>
                <h2>小区内房源信息</h2>
                <HouseTable newHouseInfo={this.state.houseList} paginationOptions={this.state.paginationOptions}/>
            </Layout>
        )
    }
}

export default Community