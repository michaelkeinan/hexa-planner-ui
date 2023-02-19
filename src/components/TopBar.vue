<template>
  <header class="top-bar">
    <div class="logo">
      <img src="../assets/hexagonal-diaphram.svg" alt="logo" />
    </div>
    <div class="tiny-vertical-spacer" />
    <div class="app-header-title">HEXA Planner Platform</div>
  </header>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  z-index: 15;
  width: 100%;
  height: 6vh;
  display: flex;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.3);
  background-color: #525252;
}
.logo {
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo > img {
  height: 120%;
  object-fit: contain;
}
.tiny-vertical-spacer {
  width: 0.05%;
  background-color: var(--color-gray);
}
.app-header-title {
  display: flex;
  padding-left: 1.5em;
  align-items: center;
  font-family: Mulish;
  font-size: 4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f4f4f4b2;
}
</style>
