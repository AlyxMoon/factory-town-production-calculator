import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

import { registerFilters } from '@/globals/filters'

Vue.config.productionTip = false
registerFilters(Vue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
