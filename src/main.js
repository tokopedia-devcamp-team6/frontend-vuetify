// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';
import 'font-awesome/css/font-awesome.css';  
import './theme/default.styl';
// import VeeValidate from 'vee-validate';
// import colors from 'vuetify/es5/util/colors';
import Truncate from 'lodash.truncate';
Vue.config.productionTip = false;
// Helpers
// Global filters
Vue.filter('truncate', Truncate);
Vue.use(Vuetify, {
  theme: {
    primary: '#4CAF50',
    secondary: '#b0bec5',
    accent: '#81C784',
    error: '#b71c1c'
  }
});
// Bootstrap application components



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
