const { approveCardClientService } = require('../../../domain/user-cases/agency/approve-card-client.js');

class ApproveCardClientController {
  async handle (request, response) {
    try {
      const { card_id, account_id, status } = request.body
      const { agencyId } = request.params

      const account = await approveCardClientService({ card_id, account_id, agencyId, status })

      response.status(200).json({
        error: false,
        message: 'Card approved successfully',
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

module.exports = { ApproveCardClientController }