import Vue from 'vue'
import router from './routes'
import store from './store/store'
// import "element-ui/lib/theme-chalk/index.css"
// import "./assets/theme/theme-purple/index.css"/
import ElementUI from 'element-ui'

import "font-awesome/css/font-awesome.min.css"
import axios from 'axios'
import App from './App'

Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
/*
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }

  let user = JSON.parse(sessionStorage.getItem('user'));

  if (!user && to.path != '/login') {
    next({path: '/login'})
    console.log(user1)
    console.log('1')
  } else {
    next()
    console.log('2')
  }
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
