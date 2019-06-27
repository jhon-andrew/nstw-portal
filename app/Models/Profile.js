'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
  static get table () {
    return 'adonis_profiles'
  }
}

module.exports = Profile
