import React, {Component} from 'react'
import Exception from "ant-design-pro/lib/Exception";
import 'ant-design-pro/dist/ant-design-pro.css';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Exception title="404" img="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
                       backText="返回首页"/>
        )
    }
}

export default index