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
  Vue.prototype.$socket = require('@adonisjs/websocket-client/dist/Ws.browser')().connect()
  Vue.prototype.$shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  Vue.prototype.$objectSum = object => {
    return Object.entries(object).reduce((previous, current, index) => {
      if (index === 1) previous = previous[1]
      return previous + current[1]
    })
  }

  Vue.prototype.$arrToObj = (array, initialValue = 0) => {
    return array.reduce((previous, current, index) => {
      if (index === 1) previous = { [previous]: initialValue }
      return { ...previous, [current]: initialValue }
    })
  }
}})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
  created () {
    this.$socket.on('open', () => console.log('Connection to the WS server has been initialized.'))
    this.$socket.on('error', () => console.log('Error connecting to the WS server.'))
  }
})
