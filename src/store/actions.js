
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

export const setModifier = ({ commit }, { category, value }) => {
  commit('SET_MODIFIER', { category, value })
}

export const setRecipeListPage = ({ commit }, page) => {
  commit('SET_RECIPE_LIST_PAGE', { page })
}

export const decrementRecipeListPage = ({ commit, state }, page) => {
  commit('SET_RECIPE_LIST_PAGE', { page: state.recipeListPage - 1 })
}

export const incrementRecipeListPage = ({ commit, state }, page) => {
  commit('SET_RECIPE_LIST_PAGE', { page: state.recipeListPage + 1 })
}

export const updateFilter = ({ commit, state }, { category, option, value }) => {
  commit('UPDATE_FILTER', { category, option, value })
  commit('SET_RECIPE_LIST_PAGE', { page: 0 })

  if (option === 'all') {
    for (const opt in state.filters[category]) {
      if (opt === 'all') continue
      commit('UPDATE_FILTER', { category, option: opt, value: false })
    }
  } else {
    commit('UPDATE_FILTER', { category, option: 'all', value: false })
  }
}
