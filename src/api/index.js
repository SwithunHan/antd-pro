import {get} from "./fetch"

// const host = "127.0.0.1:8000";

export async function getComunity(params) {
    try {
        const res = await get(`/community?${params}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getIndexHouse(params) {
    try {
        const res = await get(`/houselist/?page=1`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getDistribution(params) {
    try {
        const res = await get(`/distribution`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}