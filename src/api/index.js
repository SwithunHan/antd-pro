import {get, post} from "./fetch"

const host = "";

//获取小区
export async function getComunity(params) {
    try {
        const res = await get(`${host}/api/community?${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

//首页房源信息
export async function getIndexHouse(params) {
    try {
        const res = await get(`${host}/api/houselist/?page=1`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

//行政区内小区数量
export async function getDistribution(params) {
    try {
        const res = await get(`${host}/api/distribution`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getHouse(params) {
    try {
        const res = await get(`${host}/api/houselist/?${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getHousetype(params) {
    try {
        const res = await get(`${host}/api/housetype/?community__district=${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getHouseNumber(params) {
    try {
        const res = await get(`${host}/api/housenumber?houseState=${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getSellNumber(params) {
    try {
        const res = await get(`${host}/api/sellnumberarea`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getDynamic(params) {
    try {
        const res = await get(`${host}/api/Dynamic?page=${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getWebSignNew(params) {
    try {
        const res = await get(`${host}/api/Web_sign_new`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
export async function getWebSignOld(params) {
    try {
        const res = await get(`${host}/api/Web_sign_old`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

//登陆
export async function login(params) {
    try {
        const res = await post(`${host}/api/login/`, params);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

//注册
export async function registered(params) {
    try {
        const res = await post(`${host}/api/registered/`, params);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}