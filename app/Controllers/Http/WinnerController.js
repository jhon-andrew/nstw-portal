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

  async getPrizesWon ({ response }) {
    const faceTowels = await Winner.query().where('prize', 'Face Towel').sum({ qty: 'quantity' })
    const bagTags = await Winner.query().where('prize', 'Bag Tag').sum({ qty: 'quantity' })
    const buttonPins = await Winner.query().where('prize', 'Button Pin').sum({ qty: 'quantity' })

    return response.json({
      'Face Towel': faceTowels[0].qty || 0,
      'Bag Tag': bagTags[0].qty || 0,
      'Button Pin': buttonPins[0].qty || 0
    })
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
