const { showStatusAccountUserService } = require('../../../domain/user-cases/user/show-status-account-user.js');

class ShowStatusAccountUserController {
  async handle (request, response) {
    try {
      const { number } = request.body
      const { userId } = request.params

      const account = await showStatusAccountUserService({ userId, number })

      account.status = account.status 
      ? response.status(200).json({
          error: false,
          message: 'Sua Conta está aprovada',
          account
        })
      : response.status(200).json({
          error: false,
          message: 'Sua conta ainda esta em análise',
        })

      response.status(200).json({
        
      })
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { ShowStatusAccountUserController }