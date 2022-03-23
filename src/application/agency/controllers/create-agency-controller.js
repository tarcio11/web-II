const { createAgencyService } = require('../../../domain/user-cases/agency/create-agency.js');

class CreateAgencyController {
  async handle (request, response) {
    try {
      const { number, address } = request.body

      const agency = await createAgencyService({ number, address })

      response.status(201).json(agency)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { CreateAgencyController }