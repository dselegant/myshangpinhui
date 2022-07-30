import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

let request = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
});
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    nprogress.start();
    // 游客token
    if (store.state.detail.uuid_token)
      config.headers.userTempId = store.state.detail.uuid_token;
    // 登录后的token
    if (store.state.user.token) config.headers.token = store.state.user.token;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    nprogress.done();
    //相应成功做的事情
    return res.data;
  },
  (err) => {
    alert("服务器响应数据失败");
  }
);

export default request;
