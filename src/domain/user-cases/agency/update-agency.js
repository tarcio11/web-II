const { Agency } = require('../../entities/agency');

const updateAgencyService = async ({ agencyId, address }) => {
  const agency = await Agency.findOne({ where: { id: agencyId } });

  if (!agency) {
    throw new Error('Agency not found');
  }

  agency.address = address || agency.address;

  await agency.save();
}

module.exports = { updateAgencyService };