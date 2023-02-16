// 当前模块：API进行统一管理
import requests from './request';
import mockRequests from './mockRequest'

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 发请求：axios发请求返回结果是Promise对象
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
});

// 获取Home首页轮播图banner数据
export const reqBannerList = () => mockRequests.get('/banner');

// 获取Home首页轮播图Floor数据
export const reqFloorList = () => mockRequests.get('/floor');

// 获取搜索模块数据 /api/list post 有参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
// }
// 当前接口给服务器传递一个默认参数，至少是一个空对象
export const reqSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
});
