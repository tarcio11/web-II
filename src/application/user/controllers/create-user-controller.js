const { createUserService } = require('../../../domain/user-cases/user/create-user.js');

class CreateUserController {
  async handle (request, response) {
    try {
      const { agency_id, name, email, password, cpf, address } = request.body

      const user = await createUserService({ agency_id, name, email, password, cpf, address })

      response.status(201).json(user)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { CreateUserController }