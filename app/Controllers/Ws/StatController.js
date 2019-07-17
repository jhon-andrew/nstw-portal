'use strict'

const Profile = use('App/Models/Profile')
const Evaluation = use('App/Models/Evaluation')

class StatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onGetStats () {
    const { socket } = this
    let response = {}

    switch (socket.topic) {
      case 'stats:preregistered':
        const profiles = await Profile.getCount()
        const evaluations = await Evaluation.getCount()
        response = { stats: profiles + evaluations }
        break
      case 'stats:confirmed':
        response = { stats: await Profile.query().where('confirmed', true).getCount() }
        break
      case 'stats:evaluation':
        response = {
          type: 'initial',
          stats: await Evaluation.all()
        }
        break
      default:
        response = { error: 'Unrecognized topic.' }
        break
    }

    this.socket.emit('updateStats', response)
  }
}

module.exports = StatController
