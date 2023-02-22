// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

import store from '@/store';

// 使用插件
Vue.use(VueRouter);

// VueRouter原型对象的push先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push | replace
// 参数1：往哪里跳转
VueRouter.prototype.push = function (location, resolve, reject) {
    // call:调用函数一次，修改一次this指向
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
    // call:调用函数一次，修改一次this指向
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
};

// 配置路由
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 };
    }
});

// 全局守卫中的前置守卫
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        // 登录
        if (to.path == '/login' || to.path == '/register') {
            // 登陆后不能再进入login页面
            next('/home');
        } else {
            if (name) {
                next();
            } else {
                try {
                    //获取用户信息
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    // token获取不到用户信息    token失效
                    store.dispatch("userLogout");
                    next('login');
                }
            }
        }
    } else {
        // 未登录
        next();
    }
});

export default router;