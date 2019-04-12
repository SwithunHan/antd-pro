import React, {Component} from 'react'
import "./style.scss"
import {getComunity,getHouse} from "api/index"
import HouseTable from "components/HouseTable/HouseTable";
import {Layout} from "antd";
import CommunityInfo from "./CommunityInfo";
class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            community: {},
            paginationOptions: {
                pageSize: 5
            },
            houseList:[]
        }
    }

    componentDidMount() {
        getComunity(`search=${this.props.match.params.comName}`)
            .then((data) => {
                this.setState({
                    community:data.results[0]
                })
            })
            .catch(e=>{
                console.log(e)
            })
        getHouse(`community=${this.props.match.params.comName}`)
            .then((data)=>{
                this.setState({
                    houseList:data.results
                })
            })
            .catch(e=>{
                console.log(e)
            })
    }

    render() {
        return (
            <Layout className="Community">
                <CommunityInfo community={this.state.community}/>
                <HouseTable newHouseInfo={this.state.houseList} paginationOptions={this.state.paginationOptions}/>
            </Layout>
        )
    }
}

export default Community