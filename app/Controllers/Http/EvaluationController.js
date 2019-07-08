'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Evaluation = use('App/Models/Evaluation')

class EvaluationController {
  /**
   * Submit Evaluation Form
   */
  async submitEvaluation ({ request, response }) {
    const evaluationData = request.only(['activation_code', 'age_group', 'astigc_insights', 'astigc_ref', 'first_time', 'nstw_ref', 'organization', 'prev_astigc', 'prev_nstw', 'recommend_astigc', 'sex'])
    const evaluation = await Evaluation.create(evaluationData)

    if (evaluation) {
      response.json({
        success: true,
        message: 'Thank you for filling up the evaluation form. As a reward, you have a chance to win one of our special prizes.'
      })
    } else {
      response.json({
        error: true,
        message: 'An error occured. Contact the concierge regarding this issue.'
      })
    }
  }
}

module.exports = EvaluationController
