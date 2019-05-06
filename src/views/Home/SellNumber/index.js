import React, {Component} from 'react'
import Chart from "../../../components/Chart";
import {getSellNumber} from "../../../api";
import "./style.scss"


class  SellNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getSellNumber()
            .then((data) => {
                this.setState({
                    data: data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div className="QuantityComparison">
                <Chart chartType="line" data={this.state.data} title="各行政区房屋成交量走势图" hoverName="成交量"/>
            </div>
        )
    }
}

export default SellNumber