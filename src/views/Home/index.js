/* eslint-disable no-undef */
import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
import ListNav from "components/ListNav";
import Chart from "components/Chart"

let earthMapData = [
    {
        name: '东城区',
        value: 18163,
    },
    {
        name: '西城区',
        value: 22036,
    },
    {
        name: '海淀区',
        value: 39825,
    },
    {
        name: '朝阳区',
        value: 48405,
    },
    {
        name: '石景山区',
        value: 15212,
    },
    {
        name: '大兴区',
        value: 26681,
    },
    {
        name: '门头沟区',
        value: 11161,
    },
    {
        name: '昌平区',
        value: 20687,
    },
    {
        name: '通州区',
        value: 51488,
    },
    {
        name: '房山区',
        value: 23053,
    },
    {
        name: '丰台区',
        value: 26504,
    },
    {
        name: '顺义区',
        value: 17247,
    },
    {
        name: '怀柔区',
        value: 21812,
    },
    {
        name: '密云区',
        value: 18589,
    },
    {
        name: '延庆区',
        value: 22211,
    },
    {
        name: '平谷区',
        value: 16729,
    }
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
    {name: 'Matcha Latte', value: 43.3},
    {name: 'Milk Tea', value: 83.1},
    {name: 'Cheese Cocoa', value: 86.4},
    {name: 'Walnut Brownie', value: 72.4}
];

@inject("loginStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <ListNav/>
                <Layout style={{padding: '24px 24px 0'}}>
                    <Layout style={{
                        background: '#ffffff',
                        padding: 24,
                        margin: 0,
                        minHeight: 'calc(100vh - 130px)',
                        flexDirection: "row",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                    }}>
                        <Chart chartType="column" data={cloumnData} title="柱状图显示"/>
                        <Chart chartType="earthMap" data={earthMapData} title="地图分布"
                               style={{width: 1000, height: 600}}/>
                        <Chart chartType="Ring" data={earthMapData} title="饼状图显示"/>
                        <Chart chartType="line" data={lineData} title="折线图"/>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Home