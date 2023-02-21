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
// 当前接口给服务器传递一个默认参数，至少是一个空对象
export const reqSearchInfo = params => requests({
    url: '/list',
    method: 'post',
    data: params
});

// 获取产品详情信息 /api/item/{ skuId } get 参数skuId
export const reqGoodsInfo = skuId => requests({
    url: `/item/${skuId}`,
    method: 'get',
});

// 将产品添加到购物车（或更新某一个产品的个数）/api/cart/addToCart/{ skuId }/{ skuNum } post 参数skuId skuNum
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
});

// 获取购物车列表数据接口 /api/cart/cartList get 无参数
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get',
});

// 删除购物车产品接口 /api/cart/deleteCart/{skuId} delete 参数skuId
export const reqDeleteCartById = skuId => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
});

// 切换商品选中状态 /api/cart/checkCart/{skuId}/{isChecked} get 参数skuId isChecked
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
})

// 获取验证码 /api/user/passport/sendCode/{phone} get 参数phone
export const reqGetCode = phone => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get',
})

// 用户注册 /api/user/passport/register post 参数phone code password
export const reqUserRegister = data => requests({
    url: '/user/passport/register',
    data,
    method: 'post',
})