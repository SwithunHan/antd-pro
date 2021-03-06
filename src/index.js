import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './router/RootRouter';
import {Provider} from "mobx-react";
import loginStore from "stores/loginStore"
import "static/styles/index.scss"

const stores = {loginStore}

ReactDOM.render(
    <Provider {...stores}>
        <RootRouter/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
