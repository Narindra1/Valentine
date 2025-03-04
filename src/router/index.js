import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/",
      name: "valentin",
      component: () => import("../views/ValentinView.vue"),
    },
    {
      path: "/yes",
      name: "yes",
      component: () => import("../views/YesView.vue"),
    },
  ],
});

export default router;
