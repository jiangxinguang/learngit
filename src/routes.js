import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import NotFound from './views/404'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
   /* {
      path: '*',
      hidden: true,
      redirect: {path: '/404'}
    },*/

    {
      path: '/home',
      redirect: {path: '/order/1'},
      name: 'home',
      component: Home,

      children: [
        {
          path: '/order/:id',
          name: 'order',
          component: resolve => require(['@/views/order/order'], resolve)
        },
        {
          path: '/setting',
          name: 'setting',
          component: resolve => require(['@/views/setting/setting'], resolve)
        },
        {
          path: '/user',
          redirect: '/user/blackList',
        },
        {
          path: '/user/blackList',
          name: 'blackList',
          component: resolve => require(['@/views/user/blackList'], resolve)
        },
        {
          path: '/user/customer',
          name: 'customer',
          component: resolve => require(['@/views/user/customer'], resolve)
        },
        {
          path: '/user/carOwner',
          name: 'carOwner',
          component: resolve => require(['@/views/user/carOwner'], resolve)
        },

        {
          path: '/price',
          name: 'price',
          component: resolve => require(['@/views/price/price'], resolve)
        },

        {
          path: '/check',
          name: '',
          component: resolve => require(['@/views/check/carOwner'], resolve)
        },
      ]
    },

  ]
})
