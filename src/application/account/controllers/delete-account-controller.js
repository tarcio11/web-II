const { deleteAccountService } = require('../../../domain/user-cases/account/delete-account.js');

class DeleteAccountController {
  async handle (request, response) {
    try {
      const { accountId } = request.params

      await deleteAccountService({ accountId })
      
      response.status(201).json(agency)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { DeleteAccountController }