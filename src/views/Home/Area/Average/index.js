import React, {Component} from 'react'
import Chart from "components/Chart";
import {getHouseNumber} from "api/index";
import "./style.scss"
import {Layout, Select} from "antd";

const Option = Select.Option;

class HouseNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = (value = "在售") => {
        console.log(value)
        getHouseNumber(value).then((data) => {
            let newData = data.results.map((item) => (
                {
                    name: item.name.replace("区", "") + "区",
                    value: item.value,
                    label: {
                        show: false
                    }
                }
            ))
            newData.forEach((item, index) => {
                if (item.name === "亦庄开发区") {
                    newData.forEach((daxing) => {
                        if (daxing.name === "大兴区") {
                            daxing.value += item.value
                        }
                    })
                    newData.splice(index, 1)
                }
            })
            this.setState({
                data: newData
            })
        }).catch(e => {
            console.log(e)
        })

    }

    render() {
        return (
            <div className="QuantityComparison">
                <Layout
                    style={{width: "100%", justifyContent: "flex-start", paddingLeft: "60px", background: "#ffffff"}}>
                    <Select defaultValue={"在售"} style={{width: 120}} onChange={this.getData}>
                        <Option value="在售">在售</Option>
                        <Option value="成交">成交</Option>
                    </Select>
                </Layout>
                <Chart chartType="column" data={this.state.data} title="行政区房屋数量对比" hoverName="数量"/>
                <Chart chartType="earthMap" data={this.state.data} title="各行政区房屋数量分布" hoverName="数量"/>
            </div>
        )
    }
}

export default HouseNumber