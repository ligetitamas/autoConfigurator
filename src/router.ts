import Vue from "vue";
import Router from "vue-router";
import CsudijoView from "./views/CsudijoView.vue";
import HomeView from "./views/HomeView.vue";
import VuexDemoView from "./views/VuexDemoView.vue";
import CarsView from "./views/CarsView.vue";
import ConfiguratorView from "./views/ConfiguratorView.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      component: CarsView,
      name: "cars",
      path: "/cars"
    },
    {
      component: ConfiguratorView,
      name: "configurator",
      path: "/configurator-:id"
    },
    {
      component: HomeView,
      name: "home",
      path: "/home"
    },
    {
      component: VuexDemoView,
      name: "vuexDemo",
      path: "/vuexdemo"
    },
    {
      component: CsudijoView,
      name: "csudijo",
      path: "/"
    },
    {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/AboutView.vue"),
      name: "about",
      path: "/about"
    }
  ]
});
