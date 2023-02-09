import { reqCategoryList } from '@/api';

const state = {
    // state中数据初始值不能随意指定，根据接口的返回值初始化
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    // 通过api内的接口函数调用，向服务器发请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}