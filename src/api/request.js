// 对于axios进行二次封装
import axios from 'axios';
// 引入进度条 start方法代表进度条开始 done方法代表进度条结束
import nprogress from 'nprogress';
// 引入进度条样式
import 'nprogress/nprogress.css';

import store from '@/store';

// 1.利用axios对象的方法create，创建一个axios实例
// 2.requests就是axios，此处只是进行配置
const requests = axios.create({
    // 配置对象

    // 基础路径，发送请求时，路径中会出现api
    baseURL: '/api',

    // 请求超时事件5s
    timeout: 5000,
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出前做一些事情
requests.interceptors.request.use(config => {
    // 进度条开始
    nprogress.start();

    if (store.state.detail.uuid_token) {
        // 给请求头添加一个字段
        config.headers.userTempId = store.state.detail.uuid_token;
    }

    // 携带token给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }

    return config;
});

// 响应拦截器
requests.interceptors.response.use(res => {
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，并做一些事情
    // 进度条结束
    nprogress.done();
    return res.data;
}, err => {
    // 响应失败的回调函数
    return Promise.reject(new Error());
})

// 对外暴露
export default requests;