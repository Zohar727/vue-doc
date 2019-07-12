import Vue from 'vue'
import Router from 'vue-router'
import introduction from '../pages/introduction.md'
import button from '../pages/button.md'
import faq  from '../pages/faq.md'
import guide from '../pages/guide.md'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: introduction,
    redirect: '/introduction'
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: introduction
  },
  {
    path: '/button',
    name: 'button',
    component: button
  },
  {
    path: '/faq',
    name:  'faq',
    component: faq
  },
  {
    path: '/guide',
    name: 'guide',
    component: guide
  }
]

export default new Router({
  routes: routes
})