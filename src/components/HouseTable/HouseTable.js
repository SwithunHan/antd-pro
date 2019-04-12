import React from 'react'
import {Table} from "antd";

const columns = [
    {title: "房子名称", dataIndex: "title"},
    {title: "房子链接", dataIndex: "link", render: (name) => <a href={name} target="_blank" rel="noopener noreferrer">{name}</a>,},
    {title: "小区名称", dataIndex: "community"},
    {title: "建成时间", dataIndex: "years"},
    {title: "房屋类型", dataIndex: "housetype"},
    {title: "房屋面积", dataIndex: "square"},
    {title: "朝向", dataIndex: "direction"},
    {title: "楼层", dataIndex: "floor"},
    {title: "特点", dataIndex: "tag"},
    {title: "总价/万", dataIndex: "totalPrice"},
    {title: "每平米价格/万", dataIndex: "unitPrice"},
    {title: "关注信息", dataIndex: "followInfo", render: (name) => name !== "0" ? {name} : "暂无信息",},
    {title: "装饰类型", dataIndex: "decoration"},
    {title: "房源状态", dataIndex: "houseState"},
];

const HouseTable = ({newHouseInfo, paginationOptions}) => (
    <Table columns={columns} dataSource={newHouseInfo} size="small"
           pagination={paginationOptions} bordered={true}/>
)


export default HouseTable