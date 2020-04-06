<template>
  <tr>
    <td>{{ consumption.name | friendlyName }}</td>
    <td>{{ consumption.market | friendlyName }}</td>
    <td>{{ consumption.category | friendlyName }}</td>
    <td>{{ consumption.level | friendlyName }}</td>
    <td>{{ consumption.quality | friendlyName }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ConsumptionRatesListItem',
  props: {
    consumption: Object,
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
