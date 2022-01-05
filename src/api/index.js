import requests from './request'
import mockRequest from './mockRequest'

//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
//获取banner（Home首页轮播图接口）
export const reqgetBannerList = () => mockRequest.get("/banner");
//获取floor数据
export const reqfloorList = () => mockRequest.get("/floor");
//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqgetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get   
export const reqgoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
// 添加购物车
export const reqAddToCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'POST' })

// 获取购物车
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'GET' })

// 删除购物车商品
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })

//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get 
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });


//获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

//注册
//url:/api/user/passport/register  method:post    phone code password

export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

// 登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'POST' })

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });


//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' });

//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });

//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });

//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post

export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' });

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' });

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });

//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });