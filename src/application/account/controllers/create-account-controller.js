const { createAccountService } = require('../../../domain/user-cases/account/create-account.js');

class CreateAccountController {
  async handle (request, response) {
    try {
      const { agency_id, user_id, rg_client, cpf_client } = request.body

      await createAccountService({ agency_id, user_id, rg_client, cpf_client })

      response.status(201).json({
        error: false,
        message: 'Estamos analisando sua solicitação, aguarde...',
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

module.exports = { CreateAccountController }