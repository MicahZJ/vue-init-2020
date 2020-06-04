import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

// 插件相关
import './pluglins/index'

// 绑定axios到Vue原型链
import HttpAxios from './utils/httpTool'
Vue.prototype.$Http = HttpAxios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
