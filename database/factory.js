'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Profile', (faker) => {
  return {
    first_name: faker.first(),
    middle_initial: faker.character({ casing: 'upper' }),
    surname: faker.last(),
    age_group: faker.pickone(['Below 10', '10 - 15', '16 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', 'Above 60']),
    sex: faker.pickone(['male', 'female']),
    address: faker.address(),
    affiliation: faker.company(),
    affiliation_type: faker.pickone(['government', 'private', 'non-government', 'others']),
    email: faker.email(),
    contact_number: faker.phone()
  }
})
