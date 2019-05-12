import React, {Component} from 'react'
import "./style.scss"
import {Icon, List, Pagination} from 'antd';
import {getDynamic} from "api/index";

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            data: []
        }
    }

    componentDidMount() {
        this.getData(1)
    }

    getData = (param) => {
        getDynamic(param).then(data => {
            this.setState({
                total: data.count,
                data: data.results
            })
        })
    }

    render() {
        return (
            <div className="Info">
                <List
                    itemLayout="vertical"
                    size="default"

                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="clock-circle" text={item.date_time}/>]}
                        >
                            <List.Item.Meta
                                title={<a href={item.url}>{item.title}</a>}
                                description={item.source}
                            />
                        </List.Item>
                    )}
                />
                <Pagination defaultCurrent={1} total={this.state.total} pageSize={5} onChange={(page, pageSize) => {
                    this.getData(page)
                }}/>

            </div>
        )
    }
}

export default Index