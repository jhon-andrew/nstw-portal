'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.alter('adonis_profiles', (table) => {
      // alter table
      table.boolean('confirmed').defaultTo(false)
    })
  }

  down () {
    this.alter('adonis_profiles', (table) => {
      // reverse alternations
      table.dropColumn('confirmed')
    })
  }
}

module.exports = ProfileSchema
