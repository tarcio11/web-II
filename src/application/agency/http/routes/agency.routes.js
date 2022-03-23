const { CreateAgencyController } = require('../../../../application/agency/controllers/create-agency-controller.js');

const { Router } = require('express');

const agenciesRouter = new Router()
const createAgencyController = new CreateAgencyController()

agenciesRouter.post('/', createAgencyController.handle)

module.exports = { agenciesRouter } 