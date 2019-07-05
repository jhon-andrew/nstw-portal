'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Public Routes
Route
  .group(() => {
    Route.get('qrcode/generate', 'RegistrationController.qrImage').formats(['png'])
    Route.get('qrcode/:id', 'RegistrationController.qrImage').formats(['png'])
    Route.post('registration', 'RegistrationController.preRegister').validator('PreRegister')
    Route.post('evaluation', 'EvaluationController.create')
    Route.post('confirm-registration', 'RegistrationController.confirm')
    Route.get('profiles', 'UserController.profiles')
  })
  .prefix('api')
  .middleware(['guest'])

// Private Routes
Route
  .group(() => {
    
  })
  .prefix('api')
  .middleware(['auth'])

// Frontend Routes
Route.any('*', ({ view }) => view.render('dashboard'))
