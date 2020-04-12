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

p.not-implemented {
  margin-top: 50px;

  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  font-size: 0.9em;
  text-align: center;
}

table {
  width: 100%;

  border-collapse: collapse;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;

  thead {
    background-color: rgba(60, 80, 80, 1);
    color: #DDDDDD;
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
    font-size: 1.1em;
    padding: 10px 20px;
    text-align: left;
  }
}

.pagination-wrapper {
  display: flex;
  flex-direction: row;

  & > *:not(:last-child)  {
    margin-right: 10px;
  }
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

.align-right {
  text-align: right;
}

label {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
