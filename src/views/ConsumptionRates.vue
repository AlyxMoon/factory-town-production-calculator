<template>
  <div>
    <h1>House Consumption Rates</h1>
    <p>
      This is a list of all goods that can be consumed by houses.
      Consumption time is how often a house consumes the item.
      Happiness time is how long the house will keep a happiness point after consuming the item.
    </p>

    <consumption-rates-list></consumption-rates-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ConsumptionRatesList from '@/components/ConsumptionRatesList'

export default {
  name: 'ConsumptionRatesView',
  components: {
    ConsumptionRatesList,
  },
  created () {
    this.fetchConsumptionRates()
  },
  methods: {
    ...mapActions(['fetchConsumptionRates']),
  },
}
</script>

<style lang="scss" scoped></style>
