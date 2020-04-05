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

tr, th, td {
  border-color: black;
  border-style: solid;
  border-width: 0;

  &.border-t {
    border-top-width: 1px;
  }
  &.border-b {
    border-bottom-width: 1px;
  }
}

th, td {
  padding: 5px 10px;

  text-align: left;
}
</style>
