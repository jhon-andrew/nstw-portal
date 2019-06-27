'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.rename('profiles', 'adonis_profiles')
  }

  down () {
    this.rename('adonis_profiles', 'profiles')
  }
}

module.exports = ProfileSchema
