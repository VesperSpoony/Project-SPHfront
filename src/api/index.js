// 当前模块：API进行统一管理
import requests from './request';
import mockRequests from './mockRequest'

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数

// 发请求：axios发请求返回结果是Promise对象
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

// 获取Home首页轮播图banner接口
export const reqGetBannerList = () => mockRequests.get('/banner');