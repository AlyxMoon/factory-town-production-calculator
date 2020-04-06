<template>
  <div class="recipe-list-component">
    <h1>House Consumption Rates</h1>

    <hr />

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Market Building</th>
          <th>Category</th>
          <th>House Level</th>
          <th>Quality Level</th>
        </tr>
      </thead>
      <tbody>
        <consumption-rates-list-item
          v-for="consumption in consumptionRates"
          :key="'consumption-item-' + consumption.name"
          :consumption="consumption"
        ></consumption-rates-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ConsumptionRatesListItem from '@/components/ConsumptionRatesListItem'

export default {
  name: 'ConsumptionRatesList',
  components: {
    ConsumptionRatesListItem,
  },
  computed: {
    ...mapState({
      consumptionRates: ({ consumptionRates }) => consumptionRates,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
