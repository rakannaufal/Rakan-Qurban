import { createRouter, createWebHistory } from "vue-router";
import QurbanList from "../components/QurbanList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: QurbanList,
    },
  ],
});

export default router;
