import Vue from "vue";
import Vuex from "vuex";

import CartModule from './modules/cart';
import ProductModule from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules:{
   cart: CartModule,
   product:ProductModule
  }
});
