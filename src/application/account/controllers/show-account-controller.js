const { showAccountService } = require('../../../domain/user-cases/account/show-account.js');

class ShowAccountController {
  async handle (request, response) {
    try {
      const { accountId } = request.params

      const account = await showAccountService({ accountId })

      response.status(200).json(account)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { ShowAccountController }