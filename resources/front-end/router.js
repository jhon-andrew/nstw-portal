import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/screens/Dashboard'
import Registration from '@/screens/Registration'
import RegistrationLanding from '@/screens/Registration/Landing'
import RegistrationForm from '@/screens/Registration/Form'
import Exhibit from '@/screens/Exhibit'
import ExhibitLanding from '@/screens/Exhibit/Landing'
import ExhibitMap from '@/screens/Exhibit/Map'
import ExhibitKiosk from '@/screens/Exhibit/Kiosk'
import ExhibitSlideshow from '@/screens/Exhibit/Slideshow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      component: Dashboard
    },
    { // Registration Route
      path: '/registration',
      component: Registration,
      children: [
        {
          path: '',
          alias: 'welcome',
          component: RegistrationLanding
        },
        {
          path: 'form',
          component: RegistrationForm
        }
      ]
    },
    { // Exhibit Route
      path: '/exhibit',
      component: Exhibit,
      children: [
        {
          path: '',
          alias: 'welcome',
          component: ExhibitLanding
        },
        {
          path: 'map',
          component: ExhibitMap
        },
        {
          path: 'slideshow',
          component: ExhibitSlideshow
        },
        {
          path: '*',
          component: ExhibitKiosk
        }
      ]
    }
  ]
})
