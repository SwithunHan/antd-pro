import {observable, action, computed} from "mobx"

class loginStore {
    @observable username = "hanxudong";
    @observable num = 0;
    @observable token = localStorage.getItem("token") || "";
    @action.bound setUsername(val) {
        this.username = val;
    }

    @computed get total() {
        return this.num + 5;
    }
    set total(val){
        this.num = val;
    }

}

export default new loginStore()