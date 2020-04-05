<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
a {
  font-weight: bold;
  color: #2C3E50;
  &.router-link-exact-active {
    color: #42B983;
  }
}
</style>
