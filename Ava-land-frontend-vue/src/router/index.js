import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

/////////////////////////

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: () => import("../views/LandingView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/playlistsArchive",
      name: "playlistsArchive",
      component: () => import("../views/PlaylistArchiveView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/playlistsArchive/playlist:id",
      name: "playlist",
      component: () => import("../views/PlaylistView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("../views/UploadView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/music/:id",
      name: "MusicView",
      component: () => import("../views/MusicView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/likedSongs",
      name: "likedSongs",
      component: () => import("../views/LikedSongsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/Auth",
      name: "Auth",
      component: () => import("../views/AuthView.vue"),
      meta: { requiresAuth: false },

      children: [
        {
          path: "login",
          component: () => import("../components/Auth/loginForm.vue"),
        },
        {
          path: "signup/stage1",
          component: () => import("../components/Auth/signupForm.vue"),
        },
        {
          path: "signup/stage2",
          component: () => import("../components/Auth/secQuestion.vue"),
        },
        {
          path: "recovery",
          component: () => import("../components/Auth/recoveryForm.vue"),
        },
        {
          path: "setNewPassword",
          component: () => import("../components/Auth/setPassForm.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.state.user.isLogin) {
    router.push("/Auth/login");
  }
});

export default router;
