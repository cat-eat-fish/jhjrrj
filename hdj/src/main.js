// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// axios
import axios from "axios"
// axios.defaults.headers.post['Content-Type']='application/json;charse=UTF-8'
// axios.interceptors.request.use(function (config) {
//   config.headers['Content-Type'] = 'application/json';
// })
// const host = process.env.NODE_ENV === 'development' ? 'dev api host' : 'prod api host' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
// const instance = axios.create({
//   baseURL: host
// })
// axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios=axios;


// import "@/assets/js/Carousel.js"

// vue-resource 
import Vueresource from 'vue-resource'
// Vue.http.options.emulateJSON = true;
Vue.use(Vueresource)

// css初始化
import '@/assets/css/base.css';

// swiper
import 'swiper/dist/css/swiper.min.css';




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
