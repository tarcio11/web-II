const { showUserService } = require('../../../domain/user-cases/user/show-user.js');

class ShowUserController {
  async handle (request, response) {
    try {
      const { userId } = request.params

      const user = await showUserService({ userId })

      response.status(200).json(user)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { ShowUserController }