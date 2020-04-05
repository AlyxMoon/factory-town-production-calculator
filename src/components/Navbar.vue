<template>
  <div class="navbar-component">
    <nav class="container">
      <div class="nav-links">
        <router-link to="/recipes">Recipe List</router-link>
        <router-link to="/modifiers">Modifiers List</router-link>
        <router-link to="/consumption">House Consumption List</router-link>
        <router-link to="/production">Production Lines</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss">
$navbar-height: 50px;

.navbar-component {
  height: $navbar-height;
  width: 100%;

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $navbar-height;

    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: row;
    align-items: center;

    .nav-links {

      a {
        position: relative;
        padding: 0.2em 0.5em;

        font-weight: bold;
        color: #DDDDDD;
        text-decoration: none;

        &:not(:last-child) {
          border-right: 2px solid #AAAAAA;
        }

        &.router-link-exact-active {
          color: #42B983;
        }
      }
    }
  }
}
</style>
