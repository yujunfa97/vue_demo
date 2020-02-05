import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from "./modules/module-a";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleA
  },
  strict: true
})
