<template>
  <table class="recipe-list-component">
    <thead>
      <tr>
        <th>Name</th>
        <th>Market Building</th>
        <th>Category</th>
        <th>House Level</th>
        <th>Quality Level</th>
        <th>Consumption / minute</th>
        <th>Happiness Duration (seconds)</th>
      </tr>
    </thead>
    <tbody>
      <consumption-rates-list-item
        v-for="consumption in consumptionRatesOfPage"
        :key="'consumption-item-' + consumption.name"
        :consumption="consumption"
      ></consumption-rates-list-item>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

import ConsumptionRatesListItem from '@/components/ConsumptionRatesListItem'

export default {
  name: 'ConsumptionRatesList',
  components: {
    ConsumptionRatesListItem,
  },
  computed: {
    ...mapGetters(['consumptionRatesOfPage']),
  },
}
</script>

<style lang="scss" scoped></style>
