<template>
  <div class="footer-component">
    <footer>

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
  height: $footer-height;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
