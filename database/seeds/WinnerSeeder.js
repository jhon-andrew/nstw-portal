'use strict'

/*
|--------------------------------------------------------------------------
| WinnerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class WinnerSeeder {
  async run () {
    const winners = await Factory.model('App/Models/Winner').createMany(20)
  }
}

module.exports = WinnerSeeder
