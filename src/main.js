import Vue from 'vue'
import App from './App.vue'

// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 轮播图组件--全局组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

// 分页器组件--全局组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)

// element-ui
import { Button, MessageBox } from 'element-ui'
// 方法1 注册全局组件
Vue.component(Button.name, Button)
// 方法2 挂载在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'

// 引入mockServe.js
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/css/swiper.css'

// 统一接口api文件夹内全部请求函数
// 统一引入
import * as API from '@/api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },

  // 注册路由
  router,
  // 注册仓库:组件实例上会多了一个$store属性
  store
}).$mount('#app')
