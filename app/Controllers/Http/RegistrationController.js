'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Env = use('Env')
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Attendance = use('App/Models/Attendance')
const Mail = use('Mail')
const Ws = use('Ws')

const qr = require('qr-image')
const hashids = require('hashids')
const csv = require('csvtojson')

const hashid = new hashids(Env.get('APP_KEY'), 6)

class RegistrationController {
  /**
   * Generate a qr-code image
   */
  qrImage ({ response, params, request }) {
    const data = request.get().data || params.id
    const qrCode = qr.image(data, { size: 10 })
    response.type('image/png')
    return qrCode.pipe(response.response)
  }

  /**
   * Pre-register a participant
   */
  async preRegister ({ request, response }) {
    const participant = request.only(['first_name', 'middle_initial', 'surname', 'age_group', 'sex', 'address', 'affiliation', 'affiliation_type', 'email', 'contact_number'])

    const user = await User.create({
	  username: `${participant.first_name} ${participant.surname}`,
	  email: `${participant.first_name} ${participant.surname}`,
	  password: `${participant.first_name} ${participant.surname}`
	})

    const activationCode = hashid.encode(user.id)
    const profile = await user.profile().create({ activation_code: activationCode, ...participant })

    // Send email
    // await Mail.send('email-templates.welcome', { activationCode, ...profile.toJSON() }, message => {
    //   message
    //     .to(profile.email)
    //     .from(Env.get('MAIL_USERNAME'))
    //     .subject('[Email Confirmation] Regional Offices\' Exhibit #ASTIGCountryside')
    // })

    // Broadcast to websocket
    const topic = Ws.getChannel('stats:*').topic('stats:preregistered')
    if (topic) topic.broadcast('updateStats', user.id)

    response.json({ success: true, userId: user.id, activationCode })
  }

  /**
   * Confirm Registration
   */
  async confirm ({ request, response }) {
    const { activation_code } = request.only(['activation_code'])
    const profile = await Profile.findBy('activation_code', activation_code)

    if (!profile) return response.json({
      response: 'Activation code does not exist.'
    })

    profile.confirmed = true
    await profile.save()

    // Broadcast to websocket
    const topic = Ws.getChannel('stats:*').topic('stats:confirmed')
    if (topic) {
      const count = await Profile.query().where('confirmed', true).getCount()
      topic.broadcast('updateStats', { stats: count })
    }

    return response.json({
      response: `${profile.first_name}, your registration has been confirmed.`
    })
  }

  async stats ({ response }) {
    let profiles = await Profile.query().where('created_at', '>', '2019-08-12 00:00:00').fetch()
    response.json({
      count: profiles.toJSON().length,
      profiles
    })
  }

  async participants ({ response }) {
    //const participants = await Profile.query().select('first_name', 'surname', 'affiliation', 'affiliation_type').where('created_at', '>', '2019-09-10 00:00:00').fetch()
    //return response.json(participants)
    const csvData = await csv().fromFile('./master-list.csv')
    return response.json(csvData)
  }

  async importCsv ({ request, response }) {
    const csvData = await csv().fromFile('./master-list.csv')
    const profiles = await Profile.createMany(csvData.map(profile => {
      delete profile.field5
      return profile
    }))
    return response.json(profiles)
  }

  async present ({ request, response }) {
    const participant = request.only(['full_name', 'first_name', 'surname', 'affiliation', 'affiliation_type'])
    const attendance = await Attendance.create(participant)
    return response.json(attendance)
  }

  async attendance ({ response }) {
    const attendance = await Attendance.query().where('created_at', '>', '2019-09-11 00:00:00').fetch()
    return response.json(attendance)
  }
}

module.exports = RegistrationController
