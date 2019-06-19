'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('first_name')
      table.string('middle_initial')
      table.string('surname')
      table.integer('age')
      table.date('birthdate')
      table.enu('sex', ['male', 'female'])
      table.text('address')
      table.text('affiliation')
      table.string('affiliation_type')
      table.string('email')
      table.string('contact_number')
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
