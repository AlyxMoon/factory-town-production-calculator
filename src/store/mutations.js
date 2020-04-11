
export const SET_HOUSE_COUNT = (state, { houseCount }) => {
  state.houseCount = houseCount
}

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

export const SET_LIST_PAGE = (state, { group, page }) => {
  state.pages[group] = page
}

export const UPDATE_FILTER = (state, { group, category, option, value }) => {
  if (!state.filters[group][category]) state.filters[group][category] = {}

  state.filters[group][category] = {
    ...state.filters[group][category],
    [option]: value,
  }
}
