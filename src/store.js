import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    fetchRecipes: (context) => {
      return Promise.all([
        import('@/assets/data/recipes/farm'),
        import('@/assets/data/recipes/grainMill'),
        import('@/assets/data/recipes/lumberMill'),
        import('@/assets/data/recipes/pasture'),
        import('@/assets/data/recipes/stoneMason'),
      ]).then(recipes => {
        return recipes.reduce((all, group) => {
          return [...all, ...group.default]
        }, [])
      })
    },
  },
})
