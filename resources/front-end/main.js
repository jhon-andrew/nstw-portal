import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'

Vue.use(Vuetify, {
  theme: {
    primary: '#4fa891'
  }
})

Vue.use({ install: (Vue, options) => {
  Vue.prototype.$rules = {
    required: v => !!v || 'This field is required.',
    email: v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid'
  }

  Vue.prototype.$request = axios
}})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
