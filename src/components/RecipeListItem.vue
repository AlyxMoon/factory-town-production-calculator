<template>
  <tr>
    <td>{{ recipe.name | friendlyName }}</td>
    <td>{{ recipe.quantity }}</td>
    <td>{{ recipe.building | friendlyName }}</td>
    <td>{{ recipe.time }}</td>
    <td>{{ itemsPerMinute(recipe.time, recipe.quantity) }}</td>
    <td>{{ productionWithModifier(itemsPerMinute(recipe.time, recipe.quantity)) }}</td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RecipeListItem',
  props: {
    recipe: Object,
  },
  computed: {
    ...mapGetters(['productionWithModifier']),
  },
  methods: {
    itemsPerMinute (time, quantity) {
      return Math.floor((60 / time) * quantity)
    },
  },
}
</script>

<style lang="scss" scoped>
tr {
  background-color: #CCCCCC;
}
</style>
