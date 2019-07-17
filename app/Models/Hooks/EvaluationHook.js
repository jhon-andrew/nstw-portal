'use strict'

const Ws = use('Ws')

const EvaluationHook = exports = module.exports = {}
const Profile = use('App/Models/Profile')
const Evaluation = use('App/Models/Evaluation')

EvaluationHook.method = async (modelInstance) => {
}

EvaluationHook.broadcastStats = async (evaluation) => {
  const evaluationChannel = Ws.getChannel('stats:*').topic('stats:evaluation')
  const preregisteredChannel = Ws.getChannel('stats:*').topic('stats:preregistered')

  if (evaluationChannel) evaluationChannel.broadcast('updateStats', {
    type: 'update',
    stats: evaluation
  })

  if (preregisteredChannel) {
    const profiles = await Profile.getCount()
    const evaluation = await Evaluation.getCount()
    preregisteredChannel.broadcast('updateStats', {
      stats: profiles + evaluation
    })
  }
}
