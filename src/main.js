import Vue from 'vue'
import App from './App.vue'

import Store from './store/index';

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

new Vue({
  render: h => h(App),
  store:Store,
}).$mount('#app')
