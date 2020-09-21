import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Echarts from "echarts";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
// 全局方法挂载
Vue.prototype.echarts = Echarts;

Vue.use(Echarts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
