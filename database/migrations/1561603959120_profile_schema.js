'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    // Alter table
    this.alter('profiles', (table) => {
      table.string('activation_code')
    })
  }

  down () {
    // Undo alter
    this.alter('profiles', (table) => {
      table.dropColumn('activation_code')
    })
  }
}

module.exports = ProfileSchema
