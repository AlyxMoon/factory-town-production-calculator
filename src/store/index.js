import Vue from 'vue'
import Vuex from 'vuex'

import filters from '@/assets/data/filters'

import * as actions from '@/store/actions'
import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'

Vue.use(Vuex)

const { defaults, ...availableFilters } = filters

const state = {
  availableFilters,
  filters: defaults,

  pages: {
    recipes: 0,
    consumption: 0,
  },

  recipes: [],
  consumptionRates: [],

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
