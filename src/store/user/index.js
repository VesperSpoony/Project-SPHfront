import { reqGetCode, reqUserRegister, reqUserLogin, reqGetUserInfo, reqUserLogout } from "@/api";
import { setToken, getToken, removeToken } from '@/utils/token';

const state = {
    code: '',
    token: getToken(),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    USERLOGOUT(state) {
        state.token = '';
        state.userInfo = '';
        removeToken();
    }
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "OK"
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "OK"
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 用户登录
    async userLogin({ commit }, user) {
        let result = await reqUserLogin(user);
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            setToken(result.data.token);
            return "OK";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 获取用户信息
    async getUserInfo({ commit }, user) {
        let result = await reqGetUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
            return "OK"
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 退出登录
    async userLogout({ commit }) {
        let result = await reqUserLogout();
        if (result.code == 200) {
            commit("USERLOGOUT");
            return "OK";
        } else {
            return Promise.reject(new Error('faile'));
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