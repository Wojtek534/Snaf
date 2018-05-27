// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import './style/vfy.styl';
//import 'vuetify/dist/vuetify.min.css';
import { store } from './store/store';
import './custom/directives';
Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#3C588E',
    secondary: '#ccc'
  }
});
var app = new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
});
app.$mount('#app');
