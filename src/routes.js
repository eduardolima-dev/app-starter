const express = require('express')
const routes = express.Router()
const controllers = require('./app/controllers')
const middlewares = require('./app/middlewares')
const validate = require('express-validation')
const validators = require('./app/validators')
const handle = require('express-async-handler')

routes.post('/users', validate(validators.User), handle(controllers.UserController.store))
routes.post('/sessions', validate(validators.Session), handle(controllers.SessionController.store))

routes.use(middlewares.auth)

/**
 * Ads
 */
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post('/ads', validate(validators.Ad), handle(controllers.AdController.store))
routes.put('/ads/:id', validate(validators.Ad), handle(controllers.AdController.update))
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

/**
 * Purchases
 */
routes.post('/purchases', validate(validators.Purchase), handle(controllers.PurchaseController.store))

module.exports = routes
