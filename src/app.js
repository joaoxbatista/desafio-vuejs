import Vue from 'vue';
import store from './store';
import router from './router';
import './utils/filters';
new Vue({
  store,
  router,
}).$mount('#app');
