'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Winner extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'WinnerHook.newWinner')
  }
}

module.exports = Winner
