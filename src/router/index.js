// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes'

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
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    // call:调用函数一次，修改一次this指向
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

// 配置路由
export default new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 };
    }
})