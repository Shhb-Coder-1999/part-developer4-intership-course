import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import ViewClock from "../views/ViewClock.vue";

const routes = [
  {
    path: "/",
    name: "ViewClock",
    component: ViewClock,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
