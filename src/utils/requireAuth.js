//验证登陆
import React from "react";
import {Redirect} from "react-router";

function requireAuth(Layout, props, token) {
    if (token==="") { // 未登录
        return <Redirect to="/login"/>;
    } else {
        return <Layout {...props} />
    }
}
export default requireAuth