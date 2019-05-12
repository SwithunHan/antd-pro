import React, {Component} from 'react'
import "./style.scss"
import {List} from 'antd';
import {getDynamic} from "api/index";

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    });
}


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        getDynamic().then(data => {
            console.log(data.result)
        })
    }

    render() {
        return (
            <div className="Info">
                <List
                    itemLayout="vertical"
                    size="default"
                    pagination={{
                        pageSize: 5,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Index