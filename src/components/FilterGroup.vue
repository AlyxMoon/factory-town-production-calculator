<template>
  <div class="recipe-list-filters-component">
    <h4>Filters</h4>
    <div
      v-for="(options, category) in availableFilters"
      :key="'filter-' + category"
    >
      <h5>{{ category }}</h5>
      <label
        v-for="option in options"
        :key="'option-' + option"
        :for="option"
      >
        {{ option | friendlyName }}
        <input
          type="checkbox"
          :name="option"
          :checked="filters[category][option]"
          @input="updateFilter({ group, category, option, value: $event.target.checked })" />
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'FilterGroup',
  props: {
    group: String,
  },
  computed: {
    ...mapState({
      availableFilters ({ availableFilters }) {
        return availableFilters[this.group]
      },
      filters ({ filters }) {
        return filters[this.group]
      },
    }),
  },
  methods: {
    ...mapActions(['updateFilter']),
  },
}
</script>

<style lang="scss" scoped>
.recipe-list-filters-component {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
