'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.rename('users', 'adonis_users')
  }

  down () {
    this.rename('adonis_users', 'users')
  }
}

module.exports = UserSchema
