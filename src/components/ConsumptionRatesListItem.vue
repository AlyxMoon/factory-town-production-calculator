<template>
  <tr>
    <td>{{ consumption.name | friendlyName }}</td>
    <td>{{ consumption.market | friendlyName }}</td>
    <td>{{ consumption.category | friendlyName }}</td>
    <td>{{ consumption.level | friendlyName }}</td>
    <td>{{ consumption.quality | friendlyName }}</td>
    <td>{{ consumptionTime(consumption.name, consumption.quality) }}</td>
    <td>{{ happinessDuration(consumption.name, consumption.quality) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ConsumptionRatesListItem',
  props: {
    consumption: Object,
  },
  methods: {
    consumptionTime (name, quality) {
      if (quality === 1) return 60 / 20
      if (quality === 2) return 60 / 25
      if (quality === 3) return 60 / 30
      if (quality === 4) return 60 / 40
      if (quality === 5) return 60 / 50
    },
    happinessDuration (name, quality) {
      if (name === 'plank') return 30
      if (quality === 1) return 10
      if (quality === 2) return 25
      if (quality === 3) return 50
      if (quality === 4) return 100
      if (quality === 5) return 150
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
