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
import Evaluation from '@/screens/Evaluation'
import EvaluationLanding from '@/screens/Evaluation/Landing'
import EvaluationForm from '@/screens/Evaluation/Form'
import EvaluationGame from '@/screens/Evaluation/Game'
import Dashboard from '@/screens/Dashboard'
import DashboardPrograms from '@/screens/Dashboard/Programs'
import DashboardStats from '@/screens/Dashboard/Stats'
import DashboardSurvey from '@/screens/Dashboard/Survey'
import DashboardActivation from '@/screens/Dashboard/Activation'
import DashboardContest from '@/screens/Dashboard/Contest'
import DashboardMap from '@/screens/Dashboard/Map'
import DashboardMapMap from '@/screens/Dashboard/Map/map'
import DashboardMapKiosk from '@/screens/Dashboard/Map/contents'
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
        },
        {
          path: 'survey',
          component: DashboardSurvey
        },
        {
          path: 'activation',
          component: DashboardActivation
        },
        {
          path: 'contest',
          component: DashboardContest
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
    {
      path: '/dashboard/map',
      component: DashboardMap,
      children: [
        {
          path: '',
          component: DashboardMapMap
        },
        {
          path: 'kiosk/:id',
          component: DashboardMapKiosk
        }
      ]
    },
    {
      path: '/evaluation',
      component: Evaluation,
      children: [
        {
          path: '',
          component: EvaluationLanding
        },
        {
          path: 'form',
          component: EvaluationForm
        },
        {
          path: 'game',
          component: EvaluationGame
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
