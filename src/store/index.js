import Vue from "vue";
import Vuex from "vuex";
import inventory from "./modules/inventory.js";
import gantt from "./modules/gantt.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    inventory,
    gantt,
  },
});

export default store;
