const { deleteUserService } = require('../../../domain/user-cases/delete-user.js');

class DeleteUserController {
  async handle (request, response) {
    try {
      const { userId } = request.params

      const user = await deleteUserService({ userId })

      response.status(200).json(user)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { DeleteUserController }