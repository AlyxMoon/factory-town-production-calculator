<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

.container {
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;

  #app > & {
    min-height: calc(100vh - 150px);
    padding-bottom: 50px;
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

a {
  color: #3FB0AC;

  &:hover {
    color: #3FB0ACBB;
  }
}

h4, h5, h6 {
  margin: 0;
  padding: 0;
}

</style>
