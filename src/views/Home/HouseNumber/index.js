import React, {Component} from 'react'
import Chart from "../../../components/Chart";
import {getHouseNumber, getHousetype} from "../../../api";
import "./style.scss"
import SelectArea from "../../../components/SelectArea/SelectArea";


class HouseNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        getHouseNumber().then((data) => {
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
        })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div className="QuantityComparison">
                <Chart chartType="column" data={this.state.data} title="行政区房屋数量对比" hoverName="数量"/>
                <Chart chartType="earthMap" data={this.state.data} title="各行政区房屋数量分布" hoverName="数量"/>
            </div>
        )
    }
}

export default HouseNumber