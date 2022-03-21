import { RouteRecordRaw } from "vue-router";
const authRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "home",
    component: () => import("@/modules/home/views/home.page.vue"),
  },
];
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/modules/login/views/login.page.vue"),
  },
  {
    path: "/",
    component: () => import("@/modules/layouts/default-layout.vue"),
    children: authRoutes,
  },
];
export default routes;