import Vue from 'vue'
import Router from 'vue-router'

import {
  ConsumptionRates,
  GrowthRates,
  Modifiers,
  Production,
  Recipes,
} from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
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
      component: Modifiers,
    },
    {
      path: '/production',
      name: 'production',
      component: Production,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '/growth',
      name: 'growth',
      component: GrowthRates,
    },
    {
      path: '*',
      name: 'default',
      redirect: { name: 'recipes' },
    },
  ],
})
