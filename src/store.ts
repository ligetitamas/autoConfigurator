// import MyModule from "@/store/MyModule";
import TeslaModule from "@/store/TeslaModule";
import VuexDemoModule from "@/store/VuexDemoModule";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teslaModule: TeslaModule,
    vuexDemoModule: VuexDemoModule
    // myModule: myModule,
  }
});
