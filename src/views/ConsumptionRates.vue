<template>
  <div>
    <h1>House Consumption Rates</h1>
    <p>
      This is a list of all goods that can be consumed by houses.
      Happiness duration is how long the house will keep a happiness point after the item it's consuming has run out.
    </p>

    <hr />
    <label>
      Number of houses
      <input
        type="number"
        :value="houseCount"
        @input="setHouseCount({ value: $event.target.value })" />
    </label>

    <consumption-rates-list></consumption-rates-list>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import ConsumptionRatesList from '@/components/ConsumptionRatesList'

export default {
  name: 'ConsumptionRatesView',
  components: {
    ConsumptionRatesList,
  },
  computed: {
    ...mapState({
      houseCount: ({ houseCount }) => houseCount,
    }),
  },
  created () {
    this.fetchConsumptionRates()
  },
  methods: {
    ...mapActions(['fetchConsumptionRates', 'setHouseCount']),
  },
}
</script>

<style lang="scss" scoped></style>
