import { createRouter, createWebHistory } from "vue-router";

import dashboard from "../views/DashboardView.vue";
import userChat from "../views/ChatView.vue";
import Userlog from "../views/UserlogView.vue";

//////////////////////////

/////////////////////////

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: dashboard,
    },
    {
      path: "/userChat",
      name: "userChat",
      component: userChat,
    },

    {
      path: "/userLog",
      name: "userLog",
      component: Userlog,
    },
  ],
});

export default router;
