import React, {Component} from 'react'
import Chart from "components/Chart";
import "./style.scss"
import {Layout, Select, Table} from "antd";
import {getWebSignNew, getWebSignOld} from "api/index";

const Option = Select.Option;

const columns = [
    {title: "日期", dataIndex: "Date", render: (name) => name.split("T")[0]},
    {
        title: "网上签约数量",
        dataIndex: "Online_num",
    },
    {title: "网上签约面积", dataIndex: "Online_square"},
    {title: "住宅签约数量", dataIndex: "House_num"},
    {title: "住宅签约面积", dataIndex: "House_square"},
];
const paginationOptions = {
    pageSize: 5
}

class HouseNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            lineData: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        getWebSignNew().then((data) => {
            this.setState({
                tableData: data.results
            })
        }).catch((e) => {
            console.log(e)
        })
        getWebSignOld().then((data) => {
            let newData = data.results.map((item) => ({
                name: item.Date.replace(/^(\d{4})-(\d{2})-(\d{2}T\d{2}:\d{2}:\d{2})/, "$1年$2月"),
                "数量": item.Online_num
            }))
            // let result = {name: "网签数据走势"}
            //
            // data.results.forEach((item) => {
            //     let name = item.Date.replace(/^(\d{4})-(\d{2})-(\d{2}T\d{2}:\d{2}:\d{2})/, "$1年$2月");
            //     let value = item.Online_num;
            //     result[name] = value;
            // })
            this.setState({
                lineData: newData
            })
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <div className="QuantityComparison">

                <Chart chartType="line" data={this.state.lineData} title="网签走势"/>
                <Table columns={columns} dataSource={this.state.tableData} size="small"
                       pagination={paginationOptions} bordered={true} className="dataTable"/>
            </div>
        )
    }
}

export default HouseNumber