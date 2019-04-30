import {observable, action} from "mobx"

class AreaStore {
    @observable areaList = localStorage.getItem("areaList") || "";

    @action.bound setUsername(val) {
        this.username = val;
    }



}

export default new AreaStore()