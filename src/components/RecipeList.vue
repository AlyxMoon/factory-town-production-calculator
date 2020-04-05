<template>
  <div class="recipe-list-component">
    <h2>Recipes</h2>

    <recipe-list-filters></recipe-list-filters>

    <hr />
    <label>
      Happiness
      <input
        type="text"
        :value="happiness"
        @change="setModifier({ category: 'happiness', value: $event.target.value })" />
    </label>

    <div class="pagination-wrapper">
      <span class="page-count">{{ currentRecipeListPageText }}</span>
      <button v-if="hasPreviousRecipeListPage" @click="decrementRecipeListPage">previous</button>
      <button v-if="hasNextRecipeListPage" @click="incrementRecipeListPage">next</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Building</th>
          <th>Recipe Time</th>
          <th>Produced / minute</th>
          <th>Produced / minute (modifiers)</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(recipe, i) in recipesOfPage">
          <recipe-list-item
            class="border-t"
            :key="'recipe-item-' + i + '-' + recipe.name"
            :recipe="recipe"
          ></recipe-list-item>
          <tr
            :key="'recipe-item' + i + 'ingredient-header'"
            v-if="recipe.ingredients && recipe.ingredients.length > 0">
            <td></td>
            <th>Ingredients</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Used / minute</th>
          </tr>
          <recipe-list-ingredient-item
            class="border-b"
            v-for="(ingredient, j) in recipe.ingredients"
            :key="'recipe-' + recipe.name + '-' + 'ingredient-' + ingredient.name"
            :index="j"
            :ingredient="ingredient"
            :time="recipe.time"
          ></recipe-list-ingredient-item>
        </template>
      </tbody>
    </table>
    <div class="pagination-wrapper">
      <span class="page-count">{{ currentRecipeListPageText }}</span>
      <button v-if="hasPreviousRecipeListPage" @click="decrementRecipeListPage">previous</button>
      <button v-if="hasNextRecipeListPage" @click="incrementRecipeListPage">next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import RecipeListFilters from '@/components/RecipeListFilters'
import RecipeListItem from '@/components/RecipeListItem'
import RecipeListIngredientItem from '@/components/RecipeListIngredientItem'

export default {
  name: 'RecipeList',
  components: {
    RecipeListFilters,
    RecipeListItem,
    RecipeListIngredientItem,
  },
  mounted () {
    this.fetchRecipes()
  },
  computed: {
    ...mapGetters([
      'currentRecipeListPageText',
      'hasPreviousRecipeListPage',
      'hasNextRecipeListPage',
      'recipesOfPage',
    ]),
    ...mapState({
      happiness: ({ modifiers }) => modifiers.happiness,
    }),
  },
  methods: {
    ...mapActions([
      'fetchRecipes',
      'decrementRecipeListPage',
      'incrementRecipeListPage',
      'setModifier',
    ]),
  },
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
}

.pagination-wrapper {
  display: flex;
  flex-direction: row;

  & > *:not(:last-child)  {
    margin-right: 10px;
  }
}
</style>
