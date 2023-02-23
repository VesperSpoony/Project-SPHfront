// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

// 二级路由
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

// 路由配置信息
export default [
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
        path: '/detail/:skuId',
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: true
        }
    },
    {
        path: '/trade',
        component: Trade,
        meta: {
            show: true
        },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next();
            } else {
                // 中断当前的导航，重置回from
                next(false);
            }
        },
    },
    {
        path: '/pay',
        component: Pay,
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false);
            }
        },
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {
            show: true
        },
        // beforeEnter: (to, from, next) => {
        //     if (from.path == '/pay') {
        //         next();
        //     } else {
        //         next(false);
        //     }
        // },
    },
    {
        path: '/center',
        component: Center,
        meta: {
            show: true
        },
        // 二级路由
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },

    // 重定向，在项目运行时，访问/立刻定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]