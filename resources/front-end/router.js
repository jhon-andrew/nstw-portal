import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/screens/Registration'
import RegistrationLanding from '@/screens/Registration/Landing'
import RegistrationForm from '@/screens/Registration/Form'
import Exhibit from '@/screens/Exhibit'
import ExhibitLanding from '@/screens/Exhibit/Landing'
import ExhibitMap from '@/screens/Exhibit/Map'
import ExhibitKiosk from '@/screens/Exhibit/Kiosk'
import ExhibitSlideshow from '@/screens/Exhibit/Slideshow'
import Dashboard from '@/screens/Dashboard'
import DashboardPrograms from '@/screens/Dashboard/Programs'
import DashboardStats from '@/screens/Dashboard/Stats'
import DashboardExhibit from '@/screens/Dashboard/Exhibit'
import DashboardExhibitMenu from '@/screens/Dashboard/Exhibit/menu'
import DashboardExhibitContents from '@/screens/Dashboard/Exhibit/contents'
import DashboardExhibitVideo from '@/screens/Dashboard/Exhibit/video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: 'program-of-activities',
          component: DashboardPrograms
        },
        {
          path: 'stats/:type',
          component: DashboardStats
        }
      ]
    },
    {
      path: '/dashboard/exhibit',
      component: DashboardExhibit,
      children: [
        {
          path: '',
          name: 'exhibit',
          components: {
            default: DashboardExhibitMenu,
            video: DashboardExhibitVideo
          }
        },
        {
          path: 'kiosk/:id',
          components: {
            default: DashboardExhibitContents,
            video: DashboardExhibitVideo
          }
        }
      ]
    },
    { // Registration Route
      path: '/registration',
      alias: '/',
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
