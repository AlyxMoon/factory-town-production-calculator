
export const filteredRecipes = ({ filters, recipes }) => {
  const { building, usesIngredients } = filters
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

export const recipesOfPage = ({ recipeListPage }, { filteredRecipes }) => {
  return filteredRecipes.slice(recipeListPage * 10, (recipeListPage + 1) * 10)
}

export const currentRecipeListPageText = ({ recipeListPage }, { filteredRecipes }) => {
  const start = recipeListPage * 10
  const end = (recipeListPage + 1) * 10
  const { length } = filteredRecipes

  return `Showing ${ start + 1 }-${ Math.min(end, length) } of ${ length } recipes`
}

export const hasPreviousRecipeListPage = ({ recipeListPage }) => {
  return recipeListPage > 0
}

export const hasNextRecipeListPage = ({ recipeListPage }, { filteredRecipes }) => {
  return (recipeListPage + 1) * 10 < filteredRecipes.length
}
