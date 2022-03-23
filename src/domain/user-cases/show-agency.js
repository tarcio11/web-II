const { Agency } = require('../entities/agency');

const showAgencyService = async ({ agencyId }) => {
  const agency = await Agency.findOne({ where: { id: agencyId } });

  if (!agency) {
    throw new Error('Agency not found');
  }

  return agency
}

module.exports = { showAgencyService };