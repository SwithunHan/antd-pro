import React, {Component} from 'react'
import Chart from "../../../components/Chart";
import {getDistribution} from "../../../api";
import "./style.scss"

let earthMapData = [
    {name: "朝阳区", value: 1260},
    {name: "海淀区", value: 869},
    {name: "通州区", value: 366},
    {name: "丰台区", value: 617,},
    {name: "东城区", value: 440,},
    {name: "房山区", value: 207,},
    {name: "昌平区", value: 405},
    {name: "石景山区", value: 212},
    {name: "门头沟区", value: 202},
    {name: "西城区", value: 628},
    {name: "大兴区", value: 350},
    {name: "顺义区", value: 264}
];
//
// let lineData = [
//     {name: "一月", {name:"朝阳区",value: 120,}},
// ];
earthMapData.map((item) => (item.label = {
    show: false
}))
// let cloumnData = [
//     {"name": 'Matcha Latte', "value": 43.3},
//     {"name": 'Milk Tea', "value": 83.1},
//     {"name": 'Cheese Cocoa', "value": 86.4},
//     {"name": 'Walnut Brownie', "value": 72.4}
// ];

class QuantityComparison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distribution: []
        }
    }

    componentDidMount() {
        getDistribution()
            .then((data) => {
                let newData = data.map((item) => (
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
                            daxing.value += item.value
                        })
                        newData.splice(index, 1)
                    }
                })
                this.setState({
                    distribution: newData
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div className="QuantityComparison">
                <Chart chartType="column" data={this.state.distribution} title="行政区内小区数量对比" hoverName="数量"/>
                <Chart chartType="earthMap" data={this.state.distribution} title="" hoverName="数量"/>
            </div>
        )
    }
}

export default QuantityComparison 