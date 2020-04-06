import Vue from 'vue'
import Vuex from 'vuex'

import availableFilters from '@/assets/data/filters'

import * as actions from '@/store/actions'
import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'

Vue.use(Vuex)

const state = {
  filters: {
    building: {
      all: true,
    },
    usesIngredients: {
      all: true,
    },
  },
  consumptionRates: [],
  recipes: [],
  recipeListPage: 0,
  availableFilters,
  modifiers: {
    happiness: 0,
  },
  houseCount: 1,
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
})
