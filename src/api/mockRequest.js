import axios from "axios"

import nprogress from "nprogress";
import "nprogress/nprogress.css";
let mockRequest = axios.create({
    //基础路径
    baseURL: "/mock",
    //请求不能超过5S
    timeout: 5000,
})
// 添加请求拦截器
mockRequest.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    nprogress.start()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

mockRequest.interceptors.response.use((res) => {
    nprogress.done();
    //相应成功做的事情
    return res.data;
}, (err) => {
    alert("服务器响应数据失败");
})

export default mockRequest