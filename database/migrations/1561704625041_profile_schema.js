'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    // alter table
    this.alter('adonis_profiles', (table) => {
      table.boolean('confirmed').defaultTo(false)
    })
  }

  down () {
    // reverse alternations
    this.alter('adonis_profiles', (table) => {
      table.dropColumn('confirmed')
    })
  }
}

module.exports = ProfileSchema
