<template>
  <div>
    <h1>Recipes</h1>
    <p>
      This is a collection of all recipes found in the game and the amount that recipes produces per limit not accounting for modifiers.
    </p>

    <recipe-list></recipe-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import RecipeList from '@/components/RecipeList'

export default {
  name: 'RecipesView',
  components: {
    RecipeList,
  },
  created () {
    this.fetchRecipes()
  },
  methods: {
    ...mapActions(['fetchRecipes']),
  },
}
</script>

<style lang="scss" scoped></style>
