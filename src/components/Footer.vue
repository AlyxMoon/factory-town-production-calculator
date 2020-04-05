<template>
  <div class="footer-component">
    <footer class="container">
      <h2>Factory Town Production Calculator</h2>
      <p>
        This app is in no way affiliated with Factory Town. This is a hobby project and intended to be a companion app for planning purposes in the game. It is open source and feedback/contributions are welcome.
      </p>

      <h4>Some potentially useful links</h4>
      <ul class="nav-links">
        <li><a href="https://store.steampowered.com/app/860890/Factory_Town/" target="_blank">Factory Town on Steam</a></li>
        <li><a href="https://steamcommunity.com/app/860890/discussions/" target="_blank">Steam Discussion Forum</a></li>
        <li><a href="https://www.reddit.com/r/FactoryTown/" target="_blank">Reddit Discussion Forum</a></li>
        <li><a href="https://github.com/AlyxMoon/factory-town-production-calculator" target="_blank">Source code for this app</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
$footer-height: 100px;

.footer-component {
  min-height: $footer-height;
  width: 100%;

  padding: 20px 0;

  background-color: rgba(30, 40, 40, 1);
  color: #DDDDDD;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-links {
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  list-style: inside;

  li {
    padding: 0.2em 0;

    a {
      position: relative;

      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
