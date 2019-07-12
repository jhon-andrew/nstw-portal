'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WinnerSchema extends Schema {
  up () {
    this.create('winners', (table) => {
      table.increments()
      table.string('full_name')
      table.string('prize')
      table.integer('quantity')
      table.boolean('claimed').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('winners')
  }
}

module.exports = WinnerSchema
