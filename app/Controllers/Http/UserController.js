'use strict'
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')

class UserController {
  async profiles ({ response }) {
    const profiles = await Profile.query().select('id', 'first_name', 'surname').fetch()
    return response.json({ profiles })
  }
}

module.exports = UserController
