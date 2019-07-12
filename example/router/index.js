import Vue from 'vue'
import Router from 'vue-router'
import Button from '../pages/button.vue'
import Home from '../pages/home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Home
  }
]

export default new Router({
  routes: routes
})