import {get} from "./fetch"

// const host = "127.0.0.1:8000";

export async function getCompanyOfArea() {
    try {
        const res = await get(`/companyofarea`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}