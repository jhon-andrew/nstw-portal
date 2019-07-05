'use strict'
const Evaluation = use ('App/Models/Evalation')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with evaluations
 */
class EvaluationController {
  /**
   * Show a list of all evaluations.
   * GET evaluations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new evaluation.
   * GET evaluations/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
      const evaluation = request.only(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11'])
      
      const eval = await Evaluation.create(evaluation)
      
      response.json({ success: true, evaluationId: eval.id })
  }

  /**
   * Create/save a new evaluation.
   * POST evaluations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single evaluation.
   * GET evaluations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing evaluation.
   * GET evaluations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update evaluation details.
   * PUT or PATCH evaluations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a evaluation with id.
   * DELETE evaluations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
    
  async submit ({ request, response }) {
    const participant = request.only(['first_name', 'middle_initial', 'surname', 'age_group', 'sex', 'address', 'affiliation', 'affiliation_type', 'email', 'contact_number'])

    const user = await User.create({
      username: participant.email,
      email: participant.email,
      password: participant.email
    })

    const activationCode = hashid.encode(user.id)
    const profile = await user.profile().create({ activation_code: activationCode, ...participant })

    await Mail.send('email-templates.welcome', { activationCode, ...profile.toJSON() }, message => {
      message
        .to(profile.email)
        .from(Env.get('MAIL_USERNAME'))
        .subject('[Email Confirmation] Regional Offices\' Exhibit #ASTIGCountryside')
    })

    response.json({ success: true, userId: user.id, activationCode })
  }
}

module.exports = EvaluationController
