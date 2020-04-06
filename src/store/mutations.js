
export const SET_MODIFIER = (state, { category, value }) => {
  state.modifiers = {
    ...state.modifiers,
    [category]: value,
  }
}

export const SET_CONSUMPTION_RATES = (state, { consumptionRates = [] } = {}) => {
  state.consumptionRates = consumptionRates
}

export const SET_RECIPES = (state, { recipes = [] } = {}) => {
  state.recipes = recipes
}

export const SET_RECIPE_LIST_PAGE = (state, { page }) => {
  state.recipeListPage = page
}

export const UPDATE_FILTER = (state, { category, option, value }) => {
  if (!state.filters[category]) state.filters[category] = {}

  state.filters[category] = {
    ...state.filters[category],
    [option]: value,
  }
}
