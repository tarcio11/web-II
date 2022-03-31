const { CreateCardController } = require('../../../card/controllers/create-card-controller.js');

const { Router } = require('express');

const cardsRouter = new Router()
const createCardController = new CreateCardController()

cardsRouter.post('/:userId', createCardController.handle)
// cardsRouter.delete('/:userId', deleteUserController.handle)
// cardsRouter.put('/:userId', updateUserController.handle)
// cardsRouter.get('/:userId', showUserController.handle)
// cardsRouter.get('/status-account/:userId', showStatusAccountUserController.handle)

module.exports = { cardsRouter } 