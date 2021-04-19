import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import 'sweetalert2/src/sweetalert2.scss'
import vuetify from './plugins/vuetify';
import router from './router';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import store from './store'

// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
// 使用插件
Vue.use(VueSweetalert2)

// axios api
import { api } from './api' // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')