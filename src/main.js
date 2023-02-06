import Vue from 'vue';
import * as echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import './assets/rest.less';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
