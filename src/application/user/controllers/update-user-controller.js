const { updateUserService } = require('../../../domain/user-cases/update-user.js');

class UpdateUserController {
  async handle (request, response) {
    try {
      const { name, email, password, address } = request.body
      const { userId } = request.params

      const user = await updateUserService({ userId, name, email, password, address })

      response.status(200).json(user)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { UpdateUserController }