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

let lineData = [
    {name: "周一", "邮件营销": 120, "联盟广告": 220, "视频广告": 150, "直接访问": 320, "搜索引擎": 820},
    {name: "周二", "邮件营销": 132, "联盟广告": 182, "视频广告": 232, "直接访问": 332, "搜索引擎": 932},
    {name: "周三", "邮件营销": 101, "联盟广告": 191, "视频广告": 201, "直接访问": 301, "搜索引擎": 901},
    {name: "周四", "邮件营销": 134, "联盟广告": 234, "视频广告": 154, "直接访问": 334, "搜索引擎": 934},
    {name: "周五", "邮件营销": 90, "联盟广告": 290, "视频广告": 190, "直接访问": 390, "搜索引擎": 1290},
    {name: "周六", "邮件营销": 230, "联盟广告": 330, "视频广告": 330, "直接访问": 330, "搜索引擎": 1330},
    {name: "周日", "邮件营销": 210, "联盟广告": 310, "视频广告": 410, "直接访问": 320, "搜索引擎": 1320},
];
earthMapData.map((item) => (item.label = {
    show: false
}))
let cloumnData = [
    {"name": 'Matcha Latte', "value": 43.3},
    {"name": 'Milk Tea', "value": 83.1},
    {"name": 'Cheese Cocoa', "value": 86.4},
    {"name": 'Walnut Brownie', "value": 72.4}
];

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
                <Chart chartType="earthMap" data={earthMapData} title="" hoverName="数量"/>
            </div>
        )
    }
}

export default QuantityComparison 