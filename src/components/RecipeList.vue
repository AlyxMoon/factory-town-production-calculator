<template>
  <div class="recipe-list-component">
    <label>
      Happiness
      <input
        type="text"
        :value="happiness"
        @change="setModifier({ category: 'happiness', value: $event.target.value })" />
    </label>

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
            :key="'recipe-item-' + i + '-' + recipe.name"
            :recipe="recipe"
          ></recipe-list-item>
          <tr
            :key="'recipe-item' + i + 'ingredient-header'"
            v-if="recipe.ingredients && recipe.ingredients.length > 0"
            class="recipe-ingredient-headers"
          >
            <th colspan="2" :rowspan="recipe.ingredients.length + 1" class="align-right">Ingredients</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Used / minute</th>
          </tr>
          <recipe-list-ingredient-item
            v-for="(ingredient, j) in recipe.ingredients"
            :key="'recipe-' + recipe.name + '-' + 'ingredient-' + ingredient.name"
            :index="j"
            :last="j === recipe.ingredients.length - 1"
            :ingredient="ingredient"
            :time="recipe.time"
          ></recipe-list-ingredient-item>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import RecipeListItem from '@/components/RecipeListItem'
import RecipeListIngredientItem from '@/components/RecipeListIngredientItem'

export default {
  name: 'RecipeList',
  components: {
    RecipeListItem,
    RecipeListIngredientItem,
  },
  computed: {
    ...mapGetters(['recipesOfPage']),
    ...mapState({
      happiness: ({ modifiers }) => modifiers.happiness,
    }),
  },
  methods: {
    ...mapActions(['setModifier']),
  },
}
</script>

<style lang="scss" scoped>
tr {
  &.recipe-ingredient-headers th {
    font-size: 0.8em;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
