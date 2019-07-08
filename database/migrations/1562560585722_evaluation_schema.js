'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up () {
    this.alter('evaluations', (table) => {
      table.renameColumn('first_name', 'first_time')
      table.renameColumn('recommended_astigc', 'recommend_astigc')
    })
  }

  down () {
    this.alter('evaluations', (table) => {
      table.renameColumn('first_time', 'first_name')
      table.renameColumn('recommend_astigc', 'recommended_astigc')
    })
  }
}

module.exports = EvaluationSchema
