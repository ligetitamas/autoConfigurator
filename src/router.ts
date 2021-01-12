import Vue from "vue";
import Router from "vue-router";
import CarsView from "./views/CarsView.vue";
import ConfiguratorView from "./views/ConfiguratorView.vue";
import IndexView from "./views/IndexView.vue";

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
      component: IndexView,
      name: "index",
      path: "/"
    },
    {
      component: ConfiguratorView,
      name: "configurator",
      path: "/configurator-:id"
    }
  ]
});
