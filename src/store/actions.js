
const flattenImportedArrays = (imports) => {
  return imports.reduce((all, group) => ([...all, ...group.default]), [])
}

export const fetchConsumptionRates = ({ commit, state }) => {
  if (state.consumptionRates && state.consumptionRates.length > 0) return

  return Promise.all([
    import('@/assets/data/consumption/food'),
    import('@/assets/data/consumption/general'),
  ]).then(consumptionRates => {
    commit('SET_CONSUMPTION_RATES', {
      consumptionRates: flattenImportedArrays(consumptionRates),
    })
  })
}

export const fetchRecipes = ({ commit, state }) => {
  if (state.recipes && state.recipes.length > 0) return

  return Promise.all([
    import('@/assets/data/recipes/farm'),
    import('@/assets/data/recipes/forester'),
    import('@/assets/data/recipes/grainMill'),
    import('@/assets/data/recipes/lumberMill'),
    import('@/assets/data/recipes/pasture'),
    import('@/assets/data/recipes/stoneMason'),
  ]).then(recipes => {
    commit('SET_RECIPES', {
      recipes: flattenImportedArrays(recipes),
    })
  })
}

export const setHouseCount = ({ commit }, { value }) => {
  commit('SET_HOUSE_COUNT', { houseCount: value })
}

export const setModifier = ({ commit }, { category, value }) => {
  commit('SET_MODIFIER', { category, value })
}

export const setListPage = ({ commit }, { group, page }) => {
  commit('SET_LIST_PAGE', { group, page })
}

export const decrementListPage = ({ commit, state }, { group }) => {
  commit('SET_LIST_PAGE', { group, page: state.pages[group] - 1 })
}

export const incrementListPage = ({ commit, state }, { group }) => {
  commit('SET_LIST_PAGE', { group, page: state.pages[group] + 1 })
}

export const updateFilter = ({ commit, state }, { group, category, option, value }) => {
  commit('UPDATE_FILTER', { group, category, option, value })
  commit('SET_LIST_PAGE', { group, page: 0 })

  if (option === 'all') {
    for (const opt in state.filters[group][category]) {
      if (opt === 'all') continue
      commit('UPDATE_FILTER', { group, category, option: opt, value: false })
    }
  } else {
    commit('UPDATE_FILTER', { group, category, option: 'all', value: false })
  }
}
