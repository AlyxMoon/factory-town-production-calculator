<template>
  <div>
    <recipe-list></recipe-list>
  </div>
</template>

<script>
import RecipeList from '@/components/RecipeList'

export default {
  name: 'HomeView',
  components: {
    RecipeList,
  },
}
</script>

<style lang="scss" scoped></style>
