<template>
  <tr>
    <td>{{ recipe.name }}</td>
    <td>{{ recipe.quantity }}</td>
    <td>{{ recipe.building }}</td>
    <td>{{ recipe.time }}</td>
    <td>{{ itemsPerMinute(recipe.time, recipe.quantity) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'RecipeListItem',
  props: {
    recipe: Object,
    default: {},
  },
  methods: {
    itemsPerMinute (time, quantity) {
      return Math.floor((60 / time) * quantity)
    },
  },
}
</script>

<style lang="scss" scoped></style>
