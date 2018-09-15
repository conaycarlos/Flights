import VeeValidate from 'vee-validate';
import Vue from 'vue';
import App from './App.vue';

Vue.use(VeeValidate);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
