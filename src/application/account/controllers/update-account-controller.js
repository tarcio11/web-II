const { updateAccountService } = require('../../../domain/user-cases/account/update-account.js');

class UpdateAccountController {
  async handle (request, response) {
    try {
      const { balance, agency_id, number } = request.body
      const { accountId } = request.params

      const account = await updateAccountService({ accountId, balance, agency_id, number })

      response.status(200).json(account)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { UpdateAccountController }