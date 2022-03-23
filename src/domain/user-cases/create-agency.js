const { Agency } = require ('../entities/agency')

const createAgencyService = async ({ number, address }) => {
  const agencyExists = await Agency.findOne ({ where: { number } })

  if (agencyExists) {
    throw new Error ('Agency already exists')
  }

  const agency = await Agency.create({ number, address })
  return agency
}

module.exports = { createAgencyService }