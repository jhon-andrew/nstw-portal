import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#4fa891'
  }
})

Vue.use({ install: (Vue, options) => {
  Vue.prototype.$rules = {
    required: v => !!v || 'This field is required.',
    test: (v, x, y) => {
      console.log(v, x, y)
      console.log(arguments)
      return true
    }
  }
}})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
