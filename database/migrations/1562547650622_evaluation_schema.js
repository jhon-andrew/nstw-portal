'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up () {
    this.drop('evaluations')
    this.create('evaluations', (table) => {
      table.increments()
      table.string('activation_code')
      table.enu('age_group', ['Below 10', '10 - 15', '16 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', 'Above 60'])
      table.string('astigc_insights')
      table.string('astigc_ref')
      table.boolean('first_name')
      table.string('nstw_ref')
      table.string('organization')
      table.integer('prev_astigc')
      table.integer('prev_nstw')
      table.boolean('recommended_astigc')
      table.string('sex')
      table.timestamps()
    })
  }

  down () {
    this.drop('evaluations')
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
}

module.exports = EvaluationSchema
