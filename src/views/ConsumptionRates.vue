<template>
  <div>
    <h1>House Consumption Rates</h1>
    <p>
      This is a list of all goods that can be consumed by houses.
      Happiness duration is how long the house will keep a happiness point after the item it's consuming has run out.
    </p>

    <hr />
    <filter-group group="consumption"></filter-group>

    <label>
      Number of houses
      <input
        type="number"
        :value="houseCount"
        @input="setHouseCount({ value: $event.target.value })" />
    </label>

    <consumption-rates-list></consumption-rates-list>
    <table-paginator
      :currentPageText="currentConsumptionRatesListPageText"
      :showPrevious="hasPreviousConsumptionRatesListPage"
      :showNext="hasNextConsumptionRatesListPage"
      @on-previous="decrementListPage({ group: 'consumption' })"
      @on-next="incrementListPage({ group: 'consumption' })"
    ></table-paginator>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import ConsumptionRatesList from '@/components/ConsumptionRatesList'
import FilterGroup from '@/components/FilterGroup'
import TablePaginator from '@/components/TablePaginator'

export default {
  name: 'ConsumptionRatesView',
  components: {
    ConsumptionRatesList,
    FilterGroup,
    TablePaginator,
  },
  computed: {
    ...mapState({
      houseCount: ({ houseCount }) => houseCount,
    }),
    ...mapGetters([
      'currentConsumptionRatesListPageText',
      'hasPreviousConsumptionRatesListPage',
      'hasNextConsumptionRatesListPage',
    ]),
  },
  created () {
    this.fetchConsumptionRates()
  },
  methods: {
    ...mapActions([
      'fetchConsumptionRates',
      'setHouseCount',
      'decrementListPage',
      'incrementListPage',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
