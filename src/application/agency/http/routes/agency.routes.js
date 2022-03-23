const { CreateAgencyController } = require('../../../../application/agency/controllers/create-agency-controller.js');
const { DeleteAgencyController } = require('../../../../application/agency/controllers/delete-agency-controller.js');
const { UpdateAgencyController } = require('../../../../application/agency/controllers/update-agency-controller.js');
const { ShowAgencyController } = require('../../../../application/agency/controllers/show-agency-controller.js');

const { Router } = require('express');

const agenciesRouter = new Router()
const createAgencyController = new CreateAgencyController()
const deleteAgencyController = new DeleteAgencyController()
const updateAgencyController = new UpdateAgencyController()
const showAgencyController = new ShowAgencyController()

agenciesRouter.post('/', createAgencyController.handle)
agenciesRouter.delete('/:agencyId', deleteAgencyController.handle)
agenciesRouter.put('/:agencyId', updateAgencyController.handle)
agenciesRouter.get('/:agencyId', showAgencyController.handle)

module.exports = { agenciesRouter } 