const { CreateAccountController } = require('../../../account/controllers/create-agency-controller.js');

const { Router } = require('express');

const accountsRouter = new Router()
const createAccountController = new CreateAccountController()

accountsRouter.post('/', createAccountController.handle)
// accountsRouter.delete('/:agencyId', deleteAgencyController.handle)
// accountsRouter.put('/:agencyId', updateAgencyController.handle)
// accountsRouter.get('/:agencyId', showAgencyController.handle)

module.exports = { accountsRouter } 