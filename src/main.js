import Vue from 'vue'
import App from './App.vue'

import store from './store/index';
import router from './router/routes';

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
