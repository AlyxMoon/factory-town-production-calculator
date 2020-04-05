<template>
  <tr>
    <td></td>
    <td></td>
    <td>{{ ingredient.name }}</td>
    <td>{{ ingredient.quantity }}</td>
    <td>{{ itemsPerMinute(time, ingredient.quantity) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'RecipeListIngredientItem',
  props: {
    index: Number,
    ingredient: Object,
    time: Number,
  },
  methods: {
    itemsPerMinute (time, quantity) {
      return Math.floor((60 / time) * quantity)
    },
  },
}
</script>

<style lang="scss" scoped></style>
