const { CreateAccountController } = require('../../controllers/create-account-controller.js');
const { DeleteAccountController } = require('../../controllers/delete-account-controller.js');
const { UpdateAccountController } = require('../../controllers/update-account-controller.js');
const { ShowAccountController } = require('../../controllers/show-account-controller.js');

const { Router } = require('express');

const accountsRouter = new Router()
const createAccountController = new CreateAccountController()
const deleteAccountController = new DeleteAccountController()
const updateAccountController = new UpdateAccountController()
const showAccountController = new ShowAccountController()

accountsRouter.post('/', createAccountController.handle)
accountsRouter.delete('/:accountId', deleteAccountController.handle)
accountsRouter.put('/:accountId', updateAccountController.handle)
accountsRouter.get('/:accountId', showAccountController.handle)

module.exports = { accountsRouter } 