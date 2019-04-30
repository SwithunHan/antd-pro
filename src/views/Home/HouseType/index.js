import React, {Component} from 'react'
import Chart from "../../../components/Chart";
import {getHousetype} from "../../../api";
import "./style.scss"
import SelectArea from "../../../components/SelectArea/SelectArea";


class HouseType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            area: "朝阳区"
        }
    }

    componentDidMount() {
        this.handleChange()
    }

    handleChange = (value = "朝阳") => {
        this.setState({
            area: (value === "亦庄开发区" ? value : value + "区")
        })
        getHousetype(value)
            .then((data) => {
                let array = data.results.filter((item) => (item.value > 10))
                this.setState({
                    data: array
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    componentWillUnmount(){

    }
    render() {
        return (
            <div className="QuantityComparison">
                <SelectArea selectArea={this.handleChange}/>
                <Chart chartType="column" data={this.state.data} title={this.state.area + "内各个房屋类型数量"} hoverName="数量"
                       style={{width: "1000px", height: "600px", marginTop: "20px"}}/>
            </div>
        )
    }
}

export default HouseType