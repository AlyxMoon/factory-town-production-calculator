<template>
  <tr>
    <td>{{ ingredient.name }}</td>
    <td>{{ ingredient.quantity }}</td>
    <td>{{ itemsPerMinute(time, ingredient.quantity) }}</td>
    <td></td>
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

<style lang="scss" scoped>
td {
  background-color: #EEEEEE;
  padding: 5px 20px;
}
</style>
