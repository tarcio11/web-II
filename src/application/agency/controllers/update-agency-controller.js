const { updateAgencyService } = require('../../../domain/user-cases/agency/update-agency.js');

class UpdateAgencyController {
  async handle (request, response) {
    try {
      const { address } = request.body
      const { agencyId } = request.params

      const agency = await updateAgencyService({ agencyId, address })

      response.status(200).json(agency)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { UpdateAgencyController }