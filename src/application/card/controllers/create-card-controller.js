const { createCardService } = require('../../../domain/user-cases/card/create-card.js');

class CreateCardController {
  async handle (request, response) {
    try {
      const { account_id, type } = request.body
      const { userId } = request.params

      await createCardService({ account_id, user_id: userId, type })

      response.status(201).json({
        error: false,
        message: 'Estamos buscando um cartão para você, aguarde...',
      })
    } catch (error) {
      console.log(error);
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { CreateCardController }