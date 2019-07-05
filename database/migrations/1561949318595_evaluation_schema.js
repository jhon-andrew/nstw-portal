'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up () {
    this.create('evaluations', (table) => {
      table.increments()
      table.integer('reg_id')
      table.integer('q1')
      table.integer('q2')
      table.integer('q3')
      table.integer('q4')
      table.string('q5')
      table.integer('q6')
      table.string('q7')
      table.string('q8')
      table.integer('q9')
      table.integer('q10')
      table.string('q11')
      table.string('q12')
      table.date('eval_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('evaluations')
  }
}

module.exports = EvaluationSchema
