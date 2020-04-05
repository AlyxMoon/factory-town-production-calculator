<template>
  <div>
    <h2>Recipes</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Building</th>
          <th>Recipe Time</th>
          <th>Items / minute</th>
        </tr>
      </thead>
      <tbody>
        <recipe-list-item
          v-for="(recipe, i) in recipes"
          :key="'recipe-' + i + '-' + recipe.name"
          :recipe="recipe"
        ></recipe-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import RecipeListItem from '@/components/RecipeListItem'

export default {
  name: 'RecipeList',
  components: {
    RecipeListItem,
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
  border: 1px solid black;
}
</style>
