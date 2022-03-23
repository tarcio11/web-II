const { Agency } = require ('../../entities/agency')

const deleteAgencyService = async ({ agencyId }) => {
  const agency = await Agency.findOne ({ where: { id: agencyId } })

  if (!agency) {
    throw new Error ('Agency not found')
  }

  await agency.destroy()
}

module.exports = { deleteAgencyService }