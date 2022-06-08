export default [
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Error" },
    component: () => import("@/pages/error.vue"),
  },
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("@/pages/index.vue"),
  },
];
