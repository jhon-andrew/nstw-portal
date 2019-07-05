'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    const users = await Factory.model('App/Models/User').createMany(17)
    const profiles = await Factory.model('App/Models/Profile').makeMany(17)

    users.forEach(async (user, index) => {
      await user.profile().save(profiles[index])
    })
  }
}

module.exports = UserSeeder
