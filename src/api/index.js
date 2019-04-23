import {get, post} from "./fetch"

const host = "";

export async function getComunity(params) {
    try {
        const res = await get(`${host}/api/community?${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getIndexHouse(params) {
    try {
        const res = await get(`${host}/api/houselist/?page=1`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

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

export async function login(params) {
    try {
        const res = await post(`${host}/api/login/`, params);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function registered(params) {
    try {
        const res = await post(`${host}/api/registered/`, params);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}