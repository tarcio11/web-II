const { showAgencyService } = require('../../../domain/user-cases/show-agency.js');

class ShowAgencyController {
  async handle (request, response) {
    try {
      const { agencyId } = request.params

      const agency = await showAgencyService({ agencyId })

      response.status(200).json(agency)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { ShowAgencyController }