import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  modules: {
    users
  }
});
