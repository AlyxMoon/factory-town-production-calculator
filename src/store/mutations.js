
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
