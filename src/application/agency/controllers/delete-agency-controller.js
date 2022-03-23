const { deleteAgencyService } = require('../../../domain/user-cases/agency/delete-agency.js');

class DeleteAgencyController {
  async handle (request, response) {
    try {
      const { agencyId } = request.params

      const agency = await deleteAgencyService({ agencyId })

      response.status(201).json(agency)
    } catch (error) {
      response.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = { DeleteAgencyController }