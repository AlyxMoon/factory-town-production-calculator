import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/views/Default'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'recipes' },
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Home,
    },
    {
      path: '*',
      name: 'default',
      component: Default,
    },
  ],
})
