import Vue from 'vue'
import Router from 'vue-router'

import ConsumptionRates from '@/views/ConsumptionRates'
import Default from '@/views/Default'
import Recipes from '@/views/Recipes'

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
      path: '/consumption',
      name: 'consumption',
      component: ConsumptionRates,
    },
    {
      path: '/modifiers',
      name: 'modifiers',
      component: Default,
    },
    {
      path: '/production',
      name: 'production',
      component: Default,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '*',
      name: 'default',
      component: Default,
    },
  ],
})
