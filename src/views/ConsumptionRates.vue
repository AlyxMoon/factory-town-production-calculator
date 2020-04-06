<template>
  <div>
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
