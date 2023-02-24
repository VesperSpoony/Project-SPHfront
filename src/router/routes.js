// 引入路由组件
//import Home from '@/pages/Home'
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

// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

// 路由配置信息
export default [
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
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
    },

    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('@/pages/Communication/EventTest/EventTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'model',
                component: () => import('@/pages/Communication/ModelTest/ModelTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'sync',
                component: () => import('@/pages/Communication/SyncTest/SyncTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'attrs-listeners',
                component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'children-parent',
                component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'scope-slot',
                component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: {
                    show: false
                },
            }
        ],
    },
]