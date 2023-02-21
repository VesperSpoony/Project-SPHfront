import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
    cartList: [],
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    // 删除购物车某个产品
    async deleteCartListById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "OK";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return "OK";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 删除全部选中的产品
    deleteAllChecked({ dispatch, getters }) {
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartListById", item.skuId) : '';
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    },
    // 修改全部产品的选择状态
    updateAllChecked({ dispatch, state }, checked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked: checked });
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}