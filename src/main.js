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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
