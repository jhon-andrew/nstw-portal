'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttendanceSchema extends Schema {
  up () {
    this.create('attendances', (table) => {
      table.increments()
      table.string('full_name')
      table.string('first_name')
      table.string('surname')
      table.string('affiliation')
      table.string('affiliation_type')
      table.timestamps()
    })
  }

  down () {
    this.drop('attendances')
  }
}

module.exports = AttendanceSchema
