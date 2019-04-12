import {get} from "./fetch"

// const host = "127.0.0.1:8000";

export async function getComunity(params) {
    try {
        const res = await get(`/api/community?${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getIndexHouse(params) {
    try {
        const res = await get(`/api/houselist/?page=1`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getDistribution(params) {
    try {
        const res = await get(`/api/distribution`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
export async function getHouse(params) {
    try {
        const res = await get(`/api/houselist/?${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}