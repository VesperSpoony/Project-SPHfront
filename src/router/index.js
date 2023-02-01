// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

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
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: {
                show: true
            },
            name: 'search',
            // 路由组件传递props参数
            // 1.布尔值写法(params参数)
            // props: true
            // 2.对象写法(额外给路由组件传递props)
            // props: {
            //     a: 1,
            //     b: 2
            // }
            // 3.函数写法(可以把params参数、query参数通过props传递给路由组件)
            // props: $route => {
            //     return {
            //         keyword: $route.params.keyword,
            //         k: $route.query.k,
            //     }
            // }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },

        // 重定向，在项目运行时，访问/立刻定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})