import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import { getUUID } from '@/utils/uuid_token';
const state = {
    goodInfo: {},
    uuid_token: getUUID()
};
const mutations = {
    GETGOODSINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    // 获取产品信息
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data);
        }
    },
    // 将产品添加到购物车
    // 加入购物车后，前台将参数带给服务器，服务器写入数据成功，只返回code=200并没有返回其余数据，因此无需再commit存储到state中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return "OK"
        } else {
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}