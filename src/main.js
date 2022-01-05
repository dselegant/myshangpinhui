import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// TypeNav全局组件
import TypeNav from '@/components/TypeNav'
// mock
import '@/mock/mockServer';
// swiper样式
import "swiper/css/swiper.css";
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import {
  Button, MessageBox, Form,
  FormItem,
  Input,
  Checkbox
} from 'element-ui';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import atm from '@/assets/images/atm.gif';
//引入表单校验插件
// import "@/plugins/validate";

Vue.component(Button.name, Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input)
Vue.use(Checkbox);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(VueLazyload, {
  loading: atm,
})

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
}).$mount("#app");
