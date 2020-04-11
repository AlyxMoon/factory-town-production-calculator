<template>
  <div>
    <h1>Recipes</h1>
    <p>
      This is a collection of all recipes found in the game and the amount that recipes produces per limit not accounting for modifiers.
    </p>

    <filter-group group="recipes"></filter-group>
    <recipe-list></recipe-list>
    <table-paginator
      :currentPageText="currentRecipeListPageText"
      :showPrevious="hasPreviousRecipeListPage"
      :showNext="hasNextRecipeListPage"
      @on-previous="decrementListPage({ group: 'recipes' })"
      @on-next="incrementListPage({ group: 'recipes' })"
    ></table-paginator>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import FilterGroup from '@/components/FilterGroup'
import RecipeList from '@/components/RecipeList'
import TablePaginator from '@/components/TablePaginator'

export default {
  name: 'RecipesView',
  components: {
    FilterGroup,
    RecipeList,
    TablePaginator,
  },
  computed: {
    ...mapGetters([
      'currentRecipeListPageText',
      'hasPreviousRecipeListPage',
      'hasNextRecipeListPage',
    ]),
  },
  created () {
    this.fetchRecipes()
  },
  methods: {
    ...mapActions([
      'fetchRecipes',
      'decrementListPage',
      'incrementListPage',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
