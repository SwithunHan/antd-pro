import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "views/Home";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Switch>
                <Route exact component={Home}/>
            </Switch>
        )
    }
}

export default Content