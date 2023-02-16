import { reqSearchInfo } from '@/api';
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        // params形参：当用户派发actions时，作为第二个参数传递，至少是一个空对象
        let result = await reqSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data);
        }
    }
};
// 计算属性
// 项目中主要作用是简化仓库中的数据(可以简化将来在组件中需要用到的数据，组件获取数据时比较方便)
const getters = {
    // 当前形参state是当前仓库的state
    // 如果网络环境差，state.searchList.goodList返回undefined，因此要|| []
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}