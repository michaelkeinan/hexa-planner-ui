<template>
  <header class="top-bar">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </header>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  z-index: 10;
  display: flex;
  width: 100%;
  height: 6vh;
  background-color: slategray;
}
</style>
