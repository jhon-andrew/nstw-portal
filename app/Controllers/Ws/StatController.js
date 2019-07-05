'use strict'

const Profile = use('App/Models/Profile')

class StatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onGetStats () {
    const { socket } = this
    const stats = socket.topic === 'stats:preregistered' ? await Profile.getCount() : await Profile.query().where('confirmed', true).getCount()
    this.socket.emit('updateStats', {stats})
  }
}

module.exports = StatController
