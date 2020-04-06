<template>
  <div>
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
