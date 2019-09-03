'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Winner = use('App/Models/Winner')

class WinnerController {
  async saveWinner ({ request, response }) {
    const winnerData = request.only(['full_name', 'prize', 'quantity'])
    const winner = await Winner.create(winnerData)
    return response.json({ error: !winner, winner })
  }

  async getPrizesWon ({ request, response }) {
    const pluckedPrizes = await Winner.query().pluck('prize')
    let prizes = request.all()

    Object.keys(prizes).forEach(key => {
      prizes[key] = pluckedPrizes.filter(prize => prize === key).length
    })

    return response.json(prizes)
  }

  async getWinners ({ response }) {
    const winners = await Winner.all()
    response.json(winners)
  }

  async claimPrize ({ request, response }) {
    const requestData = request.only(['id'])
    const winner = await Winner.find(requestData.id)

    winner.claimed = true

    const update = await winner.save()
    return response.json({ error: !update, winner })
  }
}

module.exports = WinnerController
