
export const productionWithModifier = ({ modifiers }) => (productionPerMin) => {
  const { happiness } = modifiers
  let totalModifier = 1

  // modify for happiness
  if (happiness >= 5000) totalModifier *= 3
  else if (happiness >= 4000) totalModifier *= 2.8
  else if (happiness >= 3500) totalModifier *= 2.6
  else if (happiness >= 3000) totalModifier *= 2.5
  else if (happiness >= 2500) totalModifier *= 2.4
  else if (happiness >= 2000) totalModifier *= 2.3
  else if (happiness >= 1500) totalModifier *= 2.2
  else if (happiness >= 1000) totalModifier *= 2.1
  else if (happiness >= 800) totalModifier *= 2.0
  else if (happiness >= 700) totalModifier *= 1.9
  else if (happiness >= 600) totalModifier *= 1.8
  else if (happiness >= 500) totalModifier *= 1.7
  else if (happiness >= 400) totalModifier *= 1.6
  else if (happiness >= 360) totalModifier *= 1.5
  else if (happiness >= 320) totalModifier *= 1.4
  else if (happiness >= 280) totalModifier *= 1.3
  else if (happiness >= 240) totalModifier *= 1.2
  else if (happiness >= 210) totalModifier *= 1.1
  else if (happiness >= 180) totalModifier *= 1.0
  else if (happiness >= 150) totalModifier *= 0.9
  else if (happiness >= 120) totalModifier *= 0.8
  else if (happiness >= 100) totalModifier *= 0.7
  else if (happiness >= 80) totalModifier *= 0.6
  else if (happiness >= 60) totalModifier *= 0.5
  else if (happiness >= 40) totalModifier *= 0.4
  else if (happiness >= 30) totalModifier *= 0.3
  else if (happiness >= 20) totalModifier *= 0.2
  else if (happiness >= 10) totalModifier *= 0.1
  else totalModifier *= 0

  return productionPerMin + (productionPerMin * totalModifier)
}

export const filteredRecipes = ({ filters, recipes }) => {
  const { building, usesIngredients } = filters.recipes
  return recipes.filter(recipe => {
    let show = true

    show = show && (building.all || building[recipe.building])
    show = show && (
      usesIngredients.all ||
      (usesIngredients.yes && recipe.ingredients.length > 0) ||
      (usesIngredients.no && recipe.ingredients.length === 0)
    )

    return show
  })
}

export const recipesOfPage = ({ pages }, { filteredRecipes }) => {
  return filteredRecipes.slice(pages.recipes * 10, (pages.recipes + 1) * 10)
}

export const currentRecipeListPageText = ({ pages }, { filteredRecipes }) => {
  const { length } = filteredRecipes
  const start = (pages.recipes * 10) + 1
  const end = Math.min((pages.recipes + 1) * 10, length)

  return `Showing ${ start }-${ end } of ${ length } recipes`
}

export const hasPreviousRecipeListPage = ({ pages }) => {
  return pages.recipes > 0
}

export const hasNextRecipeListPage = ({ pages }, { filteredRecipes }) => {
  return (pages.recipes + 1) * 10 < filteredRecipes.length
}

export const filteredConsumptionRates = ({ filters, consumptionRates }) => {
  const { market } = filters.consumption
  return consumptionRates.filter(consumption => {
    let show = true

    show = show && (market.all || market[consumption.market])

    return show
  })
}

export const consumptionRatesOfPage = ({ pages }, { filteredConsumptionRates }) => {
  return filteredConsumptionRates.slice(pages.consumption * 10, (pages.consumption + 1) * 10)
}

export const currentConsumptionRatesListPageText = ({ pages }, { filteredConsumptionRates }) => {
  const { length } = filteredConsumptionRates
  const start = (pages.consumption * 10) + 1
  const end = Math.min((pages.consumption + 1) * 10, length)

  return `Showing ${ start }-${ end } of ${ length } recipes`
}

export const hasPreviousConsumptionRatesListPage = ({ pages }) => {
  return pages.consumption > 0
}

export const hasNextConsumptionRatesListPage = ({ pages }, { filteredConsumptionRates }) => {
  return (pages.consumption + 1) * 10 < filteredConsumptionRates.length
}
