import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "views/Home";
import Nomatch from "../404"
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Switch>
                <Route exact path="/content" component={Home}/>
                <Route component={Nomatch}/>
            </Switch>
        )
    }
}

export default Content