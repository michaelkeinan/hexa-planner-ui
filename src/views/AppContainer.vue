<template>
  <div>
    <TopBar />
    <RouterView />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";

export default {
  name: "AppContainer",

  components: {
    TopBar,
  },
};
</script>
