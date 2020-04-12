<template>
  <div class="navbar-component">
    <nav class="container">
      <ul class="nav-links">
        <li
          v-for="link in links"
          :key="link.name"
        >
          <router-link :to="{ name: link.name }">{{ link.title }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        { name: 'recipes', title: 'Recipe List' },
        { name: 'growth', title: 'Growth Rates' },
        { name: 'consumption', title: 'House Consumption Rates' },
        { name: 'modifiers', title: 'Modifiers' },
        { name: 'production', title: 'Production Lines' },
      ],
    }
  },
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

    background-color: rgba(30, 40, 40, 1);
    display: flex;
    flex-direction: row;
    align-items: center;

    .nav-links {
      display: flex;
      flex-direction: row;

      margin: 0;
      padding: 0;

      list-style: none;

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
          color: #55D94E;
        }
      }
    }
  }
}
</style>
