import React, {Component} from 'react'
import {getCompanyOfArea} from "../../api";
import echarts from "echarts";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [
                // {
                //     name: "海淀区",
                //     num: 12
                // },
                // {
                //     name: "东城区",
                //     num: 5
                // },
                // {
                //     name: "西城区",
                //     num: 6
                // },
                // {
                //     name: "大兴区",
                //     num: 6
                // },
                // {
                //     name: "昌平区",
                //     num: 10
                // },
            ]
        }
    }

    componentDidMount() {
        getCompanyOfArea()
            .then((data) => {
                this.setState({
                    chartData: data
                })
            })
            .then(() => {
                this.renderChart()
            })
    }

    renderChart() {
        let chart = echarts.init()
    }



    render() {
        return (
            <div className="Chart"/>
        )
    }
}

export default Chart