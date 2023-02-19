<template>
  <div id="app">
    <AppContainer />
  </div>
</template>

<script>
import AppContainer from "./views/AppContainer.vue";
import "./styles/app.css";
import "./styles/normalize.css";

export default {
  name: "App",

  components: {
    AppContainer,
  },
};
</script>
