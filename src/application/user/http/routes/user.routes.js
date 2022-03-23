const { CreateUserController } = require('../../../../application/user/controllers/create-user-controller.js');
const { DeleteUserController } = require('../../../../application/user/controllers/delete-user-controller');
const { UpdateUserController } = require('../../../../application/user/controllers/update-user-controller');
const { ShowUserController } = require('../../../../application/user/controllers/show-user-controller');

const { Router } = require('express');

const usersRouter = new Router()
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const showUserController = new ShowUserController()

usersRouter.post('/signup', createUserController.handle)
usersRouter.delete('/:userId', deleteUserController.handle)
usersRouter.put('/:userId', updateUserController.handle)
usersRouter.get('/:userId', showUserController.handle)

module.exports = { usersRouter } 