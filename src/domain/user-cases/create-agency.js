const { Agency } = require ('../entities/agency')

const createAgencyService = async ({ number, address }) => {
  const agency = await Agency.create({ number, address })
  return agency
}

module.exports = { createAgencyService }