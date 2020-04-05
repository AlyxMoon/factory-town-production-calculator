import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    fetchRecipes: async (context) => {
      return (await import('@/assets/data/recipes')).default
    },
  },
})
