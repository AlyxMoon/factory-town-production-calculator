<template>
  <div class="pagination-wrapper">
    <span class="page-count">{{ currentPageText }}</span>
    <button v-if="showPrevious" @click="$emit('on-previous')">previous</button>
    <button v-if="showNext" @click="$emit('on-next')">next</button>
  </div>
</template>

<script>
export default {
  name: 'TablePaginator',
  props: {
    currentPageText: String,
    showPrevious: Boolean,
    showNext: Boolean,
    'on-previous': Function,
    'on-next': Function,
  },
}
</script>

<style lang="scss" scoped>

</style>
