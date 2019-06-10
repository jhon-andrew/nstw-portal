import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/screens/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      component: Dashboard
    }
  ]
})
