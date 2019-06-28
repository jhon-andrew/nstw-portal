'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Env = use('Env')
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Mail = use('Mail')
const Ws = use('Ws')

const qr = require('qr-image')
const hashids = require('hashids')

const hashid = new hashids(Env.get('APP_KEY'), 6)

class RegistrationController {
  /**
   * Generate a qr-code image
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  qrImage ({ response, params }) {
    const qrCode = qr.image(params.id, { size: 10 })
    response.type('image/png')
    return qrCode.pipe(response.response)
  }

  /**
   * Pre-register a participant
   * 
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async preRegister ({ request, response }) {
    const participant = request.only(['first_name', 'middle_initial', 'surname', 'age_group', 'sex', 'address', 'affiliation', 'affiliation_type', 'email', 'contact_number'])

    const user = await User.create({
      username: participant.email,
      email: participant.email,
      password: participant.email
    })

    const activationCode = hashid.encode(user.id)
    const profile = await user.profile().create({ activation_code: activationCode, ...participant })

    // Send email
    await Mail.send('email-templates.welcome', { activationCode, ...profile.toJSON() }, message => {
      message
        .to(profile.email)
        .from(Env.get('MAIL_USERNAME'))
        .subject('[Email Confirmation] Regional Offices\' Exhibit #ASTIGCountryside')
    })

    // Broadcast to websocket
    const topic = Ws.getChannel('stats:*').topic('stats:preregistered')
    if (topic) topic.broadcast('updateStats', user.id)

    response.json({ success: true, userId: user.id, activationCode })
  }

  async confirm ({ request, response }) {
    const { activation_code } = request.only(['activation_code'])
    const profile = await Profile.findBy('activation_code', activation_code)

    if (profile && profile.activation_code === activation_code) {
      profile.confirmed = true
      await profile.save()

      const topic = Ws.getChannel('stats:*').topic('stats:confirmed')
      if (topic) topic.broadcast('updateStats', {
        stats: await Profile.query().where('confirmed', true).getCount()
      })

      response.json({ success: true, message: 'Registration has been confirmed.' })
    } else response.json({
      error: true,
      message: 'Activation code is incorrect.'
    })
  }
}

module.exports = RegistrationController
