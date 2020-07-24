import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "fullpage-vue/src/fullpage.css";
import VueFullpage from "fullpage-vue";

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper);
Vue.use(VueFullpage);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
