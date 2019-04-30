import React, {Component} from 'react'
import {Select} from "antd";
import {getDistribution} from "../../api";
import "./style.scss"

const Option = Select.Option;

class SelectArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectData: [],
            area: "朝阳"
        }
    }

    componentDidMount() {
        getDistribution().then((data) => {
            console.log(data);
            let array = [];
            for (let area of data) {
                array.push({name: area.name, key: array.length + 1})
            }
            this.setState({
                selectData: array
            })
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <div className="select-area">
                <Select defaultValue={"朝阳"} style={{width: 120}} onChange={this.props.selectArea}>
                    {
                        this.state.selectData.map((item) => (
                            <Option value={item.name} key={item.key}>{item.name.split("区")[0] + "区"}</Option>
                        ))
                    }
                </Select>
            </div>

        )
    }
}


export default SelectArea