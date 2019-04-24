import React, {Component} from 'react'
import echarts from "echarts";
import "./style.scss"
import PropTypes from "prop-types";
import beijing from "echarts/map/json/province/beijing"
import * as d3 from "d3";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.echartsElement = null // echarts dom
    }

    componentDidMount() {
        this.renderChart()
    }

    componentDidUpdate() {
        this.renderChart()
    }

    renderChart() {
        let option = {
            column: {
                title: {
                    text: this.props.title,
                    left: 'center',
                },
                //悬浮提示框
                tooltip: {},
                //数据
                dataset: {
                    source: this.props.data,
                    // [
                    //     {product: 'Matcha Latte', 'value': 43.3},
                    //     {product: 'Milk Tea', 'value': 83.1},
                    //     {product: 'Cheese Cocoa', 'value': 86.4},
                    //     {product: 'Walnut Brownie', 'value': 72.4}
                    // ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                series: [

                    {
                        type: 'bar', name: this.props.hoverName,
                    },
                ]

            },
            earthMap: {
                backgroundColor: '#ffffff',
                title: {
                    text: this.props.title,
                    left: 'center',
                    textStyle: {
                        color: '#000'
                    }
                },
                tooltip: {},
                visualMap: {
                    min: 0,
                    max: d3.max(this.props.data, (d) => d.value),
                    // left: 'left',
                    // top: 'bottom',
                    // text: ['高', '低'], // 文本，默认为数值文本
                    // calculable: true,
                    inRange: {
                        color: ['#e1f5fe', '#29b6f6', '#01579b']
                    }
                },
                series: [{
                    name: this.props.hoverName,
                    type: 'map',
                    mapType: 'bj',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {

                        normal: {
                            borderColor: '#389BB7',
                            areaColor: '#fff',
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    },
                    animation: false,
                    data: this.props.data,
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'quinticInOut',
                }]
            },
            Ring: {
                title: {
                    text: this.props.title,
                    x: 'center'
                },
                tooltip: {
                    // trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: this.props.hoverName,
                        type: 'pie',
                        data: this.props.data,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        // [
                        //     {value: 335, name: '直接访问'},
                        //     {value: 310, name: '邮件营销'},
                        //     {value: 234, name: '联盟广告'},
                        //     {value: 135, name: '视频广告'},
                        //     {value: 1548, name: '搜索引擎'}
                        // ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            line: {
                title: {
                    text: this.props.title
                },
                tooltip: {
                    trigger: 'axis'
                },
                dataset: {
                    // source: [
                    //         {name: "周一", "邮件营销": 120, "联盟广告": 220, "视频广告": 150, "直接访问": 320, "搜索引擎": 820},
                    //         {name: "周二", "邮件营销": 132, "联盟广告": 182, "视频广告": 232, "直接访问": 332, "搜索引擎": 932},
                    //         {name: "周三", "邮件营销": 101, "联盟广告": 191, "视频广告": 201, "直接访问": 301, "搜索引擎": 901},
                    //         {name: "周四", "邮件营销": 134, "联盟广告": 234, "视频广告": 154, "直接访问": 334, "搜索引擎": 934},
                    //         {name: "周五", "邮件营销": 90, "联盟广告": 290, "视频广告": 190, "直接访问": 390, "搜索引擎": 1290},
                    //         {name: "周六", "邮件营销": 230, "联盟广告": 330, "视频广告": 330, "直接访问": 330, "搜索引擎": 1330},
                    //         {name: "周日", "邮件营销": 210, "联盟广告": 310, "视频广告": 410, "直接访问": 320, "搜索引擎": 1320},
                    //     ],
                    source: this.props.data
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,

                },
                yAxis: {
                    type: 'value'
                },
                // 声明多个 line 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
                series: this.props.data.map((e) => (
                    {
                        type: 'line',
                        // name: this.props.hoverName,
                    }
                )),
                // series: {
                //     type:"line",
                // },
                color: [
                    '#FF9C6E', '#FFC069', '#95DE64', '#5CDBD3', '#69C0FF', '#85A5FF', '#B37FEB', '#FF85C0'
                ]
            }

        };
        let chart = echarts.init(this.echartsElement) || echarts.getInstanceByDom(this.echartsElement);
        echarts.registerMap('bj', beijing);
        chart.setOption(option[this.props.chartType])
    }

    render() {

        return (
            <div className="Chart" ref={(e) => {
                this.echartsElement = e
            }} style={this.props.style}>
            </div>)
    }
}

Chart.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    chartType: PropTypes.oneOf(['column', 'earthMap', 'Ring', 'line']),
    hoverName: PropTypes.string
};
Chart.defaultProps = {
    title: "测试title",
    chartType: "columnOption",
    data: []
}
export default Chart