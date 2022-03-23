const { approveAccountService } = require('../../../domain/user-cases/agency/approve-account.js');

class ApproveAccountController {
  async handle (request, response) {
    try {
      const { status, user_id } = request.body
      const { agencyId } = request.params

      const account = await approveAccountService({ agencyId, user_id, status })

      response.status(200).json({
        error: false,
        message: 'Account approved successfully',
        account
      })
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { ApproveAccountController }