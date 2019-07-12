'use strict'

const Ws = use('Ws')

const WinnerHook = exports = module.exports = {}

WinnerHook.method = async (modelInstance) => {
}

WinnerHook.newWinner = async (winner) => {
  const topic = Ws.getChannel('stats:*').topic('stats:winner')
  if (topic) topic.broadcast('updateStats', {
    type: 'new',
    winner
  })
}
