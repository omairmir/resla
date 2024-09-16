import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import VueCarousel from "vue-carousel";
import VueLodash from "vue-lodash";
import lodash from "lodash";

import "./assets/css/index.css";

Vue.use(VueCarousel);
Vue.use(VueLodash, { lodash: lodash });

if (process.env.NODE_ENV !== 'production') {
  // Disable Facebook Pixel
  window.fbq = () => {};

  // Disable Reddit Pixel
  window.rdt = () => {};

  // Disable Google Analytics
  window.ga = () => {};
  window.gtag = () => {};
  window.dataLayer = { push: () => {} };
}

// Check if network requests should be disabled
if (process.env.VUE_APP_DISABLE_NETWORK === 'true') {
  window.fetch = () => Promise.reject(new Error('Network calls are disabled.'));
  window.XMLHttpRequest = function () {
    this.open = () => {};
    this.send = () => {};
  };
  // move tfrom this block if you want intercept without using enviornment variable
  axios.interceptors.request.use(config => {
    console.log(`Blocked request to ${config.url}`);
    return Promise.reject(new Error('Network calls are disabled in development mode.'));
  });
} else {
  // Optionally set up axios interceptors here if not disabling network
}

import axios from 'axios';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");