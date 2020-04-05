<template>
  <div class="recipe-list-component">
    <h2>Recipes</h2>
    <div class="pagination-wrapper">
      <span class="page-count">Showing page {{ page * 10 }}-{{ (page + 1) * 10 }} of {{ recipes.length }} recipes</span>
      <button v-if="hasPrevPage" @click="page--">previous</button>
      <button v-if="hasNextPage" @click="page++">next</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Building</th>
          <th>Recipe Time</th>
          <th>Produced / minute</th>
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
      <span class="page-count">Showing page {{ page + 1 }} of {{ recipes.length }} recipes</span>
      <button v-if="hasPrevPage" @click="page--">previous</button>
      <button v-if="hasNextPage" @click="page++">next</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import RecipeListItem from '@/components/RecipeListItem'
import RecipeListIngredientItem from '@/components/RecipeListIngredientItem'

export default {
  name: 'RecipeList',
  components: {
    RecipeListItem,
    RecipeListIngredientItem,
  },
  data () {
    return {
      recipes: [],
      page: 0,
    }
  },
  async mounted () {
    this.recipes = await this.fetchRecipes()
  },
  computed: {
    hasPrevPage () {
      return this.page > 0
    },
    hasNextPage () {
      return (this.page + 1) * 10 < this.recipes.length
    },
    recipesOfPage () {
      return this.recipes.slice(this.page * 10, (this.page + 1) * 10)
    },
  },
  methods: {
    ...mapActions(['fetchRecipes']),
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
