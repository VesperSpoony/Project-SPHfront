// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

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