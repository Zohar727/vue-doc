import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import DemoBlock from './components/demo-block.vue'
import KisUI from '../src/index'

Vue.config.productionTip = false
Vue.component("demo-block", DemoBlock);
Vue.use(KisUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
