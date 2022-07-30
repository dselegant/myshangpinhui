import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';
Vue.use(VueRouter);

// 重写push和replace方法，新版的router中的这些方法都是promise类型，
// 要传resolve和reject
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 };
  },
});

// token
let token = store.state.user.token;
// 登录后用户信息的name
let name = store.state.user.userInfo.name;
router.beforeEach(async (to, from, next) => {
  // 已登录
  if (token) {
    // 登录后去登录页
    if (to.path == '/login') {
      next('/');
    } else {
      //  如果有信息
      if (name) {
        next();
      } else {
        // 没有信息就发送请求
        try {
          await store.dispatch('reqUserInfomation');
          next();
        } catch (error) {
          //token失效从新登录
          await store.dispatch('goLogout');
          next('/login');
        }
      }
    }
    // 未登录
  } else {
    let toPath = to.path;
    // 未登录路由拦截
    if (
      toPath.indexOf('/center') != -1 ||
      toPath.indexOf('/pay') != -1 ||
      toPath.indexOf('/trade') != -1
    ) {
      // 存储路由拦截的路由，登陆成功后进行跳转
      next(`/login?redirect=${from.path}`);
    } else {
      next();
    }
  }
});

export default router;
