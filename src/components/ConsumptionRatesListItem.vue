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
import { mapState } from 'vuex'

export default {
  name: 'ConsumptionRatesListItem',
  props: {
    consumption: Object,
  },
  computed: {
    ...mapState({
      houseCount: ({ houseCount }) => houseCount,
    }),
  },
  methods: {
    consumptionTime (name, quality) {
      const qualityModifier = {
        1: 20, 2: 25, 3: 30, 4: 40, 5: 50,
      }

      return (this.houseCount * (60 / qualityModifier[quality])).toFixed(2)
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
