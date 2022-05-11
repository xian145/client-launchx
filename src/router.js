import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/commanders",
    name: "commanders",
    component: () => import("./components/commandersList")
  },
  {
    path: "/commander/:id",
    name: "commander-details",
    component: () => import("./components/commander")
  },
  {
    path: "/add",
    name: "add-commander",
    component: () => import("./components/AddCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
