import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Icons from 'better_2_getter_icons'
import router from './plugins/router'

Vue.config.productionTip = false;
Vue.use(Icons);
new Vue({
  Icons,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
