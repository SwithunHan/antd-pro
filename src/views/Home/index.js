import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import "./style.scss"
import {Layout} from 'antd';
import ListNav from "components/ListNav";
import {Redirect, Route, Switch} from "react-router";
import AreaNumber from "./Area/Number";
import AreaAverage from "./Area/Average"
import AreaTotal from "./Area/Total"
import PropNumber from "./Prop/Number"
import PropPrice from "./Prop/Price"
import TypeNumber from "./Type/Number";
import DecorationNumber from "./Decoration/Number"
import DecorationPrice from "./Decoration/Price"
import YearNumber from "./Year/Number"
import YearPrice from "./Year/Price"
import WebSign from "./Websign/Number"
import DynamicInfo from "./Dynamic/Info"

@inject("loginStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log("Home 渲染完成")
    }

    componentDidUpdate(preProps, preState, value) {
        console.log()
    }

    render() {
        return (
            <Layout>
                <Route component={ListNav}/>
                <Layout style={{padding: '24px 24px 0'}}>
                    <Layout style={{
                        background: '#ffffff',
                        padding: 24,
                        margin: 0,
                        minHeight: 'calc(100vh - 130px)',
                    }}>
                        <Switch>
                            <Route exact path="/app/content" component={AreaNumber}/>
                            {/*平均房价*/}
                            <Route exact path="/app/content/area/average" component={AreaAverage}/>
                            {/*总价*/}
                            <Route exact path="/app/content/area/total" component={AreaTotal}/>
                            {/*面积数量*/}
                            <Route exact path="/app/content/prop/number" component={PropNumber}/>
                            {/*面积价格*/}
                            <Route exact path="/app/content/prop/price" component={PropPrice}/>
                            {/*类型数量*/}
                            <Route exact path="/app/content/type/number" component={TypeNumber}/>
                            {/*装修数量*/}
                            <Route exact path="/app/content/decoration/number" component={DecorationNumber}/>
                            {/*面积价格*/}
                            <Route exact path="/app/content/decoration/price" component={DecorationPrice}/>
                            {/*年份数量*/}
                            <Route exact path="/app/content/year/number" component={YearNumber}/>
                            {/*年份价格*/}
                            <Route exact path="/app/content/year/price" component={YearPrice}/>
                            {/*网签信息*/}
                            <Route exact path="/app/content/websign/number" component={WebSign}/>
                            {/*动态信息*/}
                            <Route exact path="/app/content/dynamic/info" component={DynamicInfo}/>
                            <Redirect to="/404"/>
                        </Switch>

                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Home