'use strict'

const Ws = use('Ws')

const EvaluationHook = exports = module.exports = {}

EvaluationHook.method = async (modelInstance) => {
}

EvaluationHook.broadcastStats = async (evaluation) => {
  const topic = Ws.getChannel('stats:*').topic('stats:evaluation')
  if (topic) topic.broadcast('updateStats', {
    type: 'update',
    stats: evaluation
  })
}
