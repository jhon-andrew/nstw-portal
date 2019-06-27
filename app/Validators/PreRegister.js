'use strict'

class PreRegister {
  get rules () {
    return {
      first_name: 'required',
      surname: 'required',
      age_group: 'required',
      sex: 'required',
      address: 'required',
      affiliation: 'required',
      affiliation_type: 'required',
      email: 'required|email|unique:adonis_users',
      contact_number: 'required'
    }
  }

  get validateAll () {
    return true
  }

  get messages () {
    return {
      'required': '{{ field }} is required.',
      'email.unique': 'The {{ field }} is already registered.'
    }
  }

  async fails (errorMessages) {
    const { response } = this.ctx
    response.json({ errors: errorMessages })
  }
}

module.exports = PreRegister
