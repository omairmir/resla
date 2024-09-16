import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false,
    isOverlayActive: false,
    root_url: "https://landing-api-gwr1.onrender.com", //"http://localhost:5001",
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    activateOverlay(state) {
      state.isOverlayActive = true;
    },
    deactivateOverlay(state) {
      state.isOverlayActive = false;
    },
  },
});

export default store;
