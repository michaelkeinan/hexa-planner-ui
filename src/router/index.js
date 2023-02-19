import Vue from "vue";
import VueRouter from "vue-router";
import PlannerView from "../views/PlannerView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "planner-view",
      component: PlannerView,
    },
  ],
});

export default router;
