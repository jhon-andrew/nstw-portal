import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/screens/Dashboard'
import Registration from '@/screens/Registration'
import Landing from '@/screens/Registration/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      component: Dashboard
    },
    {
      path: '/registration',
      component: Registration,
      children: [
        {
          path: '',
          alias: 'welcome',
          component: Landing
        }
      ]
    }
  ]
})
