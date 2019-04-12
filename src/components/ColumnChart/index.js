import React, {Component} from 'react'
import {getDistribution} from "../../api";
import echarts from "echarts";
import "./style.scss"


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            option: {
                title: {
                    text: '行政区内小区数量'
                },
                tooltip: {},
                legend: {
                    data: ['小区数量']
                },
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: []
                }]
            }
        }
    }

    componentDidMount() {
        getDistribution()
            .then((data) => {
                let xAxis = [];
                let xseries = [];
                for (let info of data) {
                    xAxis.push(info['district'])
                    xseries.push(info['num'])
                }
                this.setState({
                    option: {
                        title: {
                            text: '行政区内小区数量'
                        },
                        tooltip: {},
                        legend: {
                            data: ['小区数量']
                        },
                        xAxis: {
                            data: xAxis
                        },
                        yAxis: {},
                        series: [{
                            name: '小区数量',
                            type: 'bar',
                            data: xseries
                        }]
                    }
                });
                console.log(data)
            })
            .then(() => {
                this.renderChart()
            })
        console.log(this)
    }

    renderChart() {
        let chart = echarts.init(document.querySelector(".Chart"))
        chart.setOption(this.state.option)
    }


    render() {
        return (
            <div className="Chart">
                hello world
            </div>
        )
    }
}

export default Chart