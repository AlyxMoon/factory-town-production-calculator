<template>
  <tr :class="{ last }">
    <td>{{ ingredient.name | friendlyName }}</td>
    <td>{{ ingredient.quantity }}</td>
    <td>{{ itemsPerMinute(time, ingredient.quantity) }}</td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: 'RecipeListIngredientItem',
  props: {
    last: Boolean,
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
tr {
  &.last {
    border-bottom: 2px solid #555555;
  }
}

td {
  background-color: #EEEEEE;
  padding: 5px 20px;
}
</style>
