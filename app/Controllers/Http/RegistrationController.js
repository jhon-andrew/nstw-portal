'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Env = use('Env')
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Mail = use('Mail')

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

    const profile = await user.profile().create(participant)
    const activationCode = hashid.encode(user.id)

    await Mail.send('email-templates.welcome', { activationCode, ...profile.toJSON() }, message => {
      message
        .to(profile.email)
        .from(Env.get('MAIL_USERNAME'))
        .subject('[Email Confirmation] Regional Offices\' Exhibit #ASTIGCountryside')
    })

    response.json({ success: true, userId: user.id, activationCode })
  }
}

module.exports = RegistrationController
