import Vue from "vue";
import VueRouter from "vue-router";
import PageIndex from "@/views/PageIndex";
import PageHome from "@/views/PageHome";
import homeChild from "@/components/home-child";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: PageIndex,
  },
  {
    path: "/home",
    name: "home",
    component: PageHome,
    children: [
      {
        path: "homeChild/:id",
        name: "homeChild",
        component: homeChild,
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
