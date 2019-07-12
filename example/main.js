import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import KisUI from '../src/index'

Vue.config.productionTip = false
Vue.use(KisUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
