<template>
  <div class="recipe-list-component">
    <h2>Recipes</h2>
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
        <template v-for="(recipe, i) in recipes">
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
    RecipeListIngredientItem
  },
  data () {
    return {
      recipes: [],
    }
  },
  async mounted () {
    this.recipes = await this.fetchRecipes()
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
</style>
