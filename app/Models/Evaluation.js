'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evaluation extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'EvaluationHook.broadcastStats')
  }
}

module.exports = Evaluation
