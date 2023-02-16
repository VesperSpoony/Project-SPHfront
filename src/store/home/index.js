import { reqCategoryList, reqBannerList, reqFloorList } from '@/api';

const state = {
    // state中数据初始值不能随意指定，根据接口的返回值初始化
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const actions = {
    // 通过api内的接口函数调用，向服务器发请求，获取服务器数据
    async getCategoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("GETCATEGORYLIST", result.data);
        }
    },

    async getBannerList({ commit }) {
        let result = await reqBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },

    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
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