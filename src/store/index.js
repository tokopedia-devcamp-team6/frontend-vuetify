import Vue from 'vue';
import Vuex from 'vuex';
/* import the modules */
import auth from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});
