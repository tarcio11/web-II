const { Account } = require('../../entities/account');

const approveAccountService = async ({ user_id, agencyId, status }) => {
  const account = await Account.findOne({ where: { user_id }});

  if (!account) {
    throw new Error('Account not found');
  }

  if (account.agency_id !== Number(agencyId)) {
    throw new Error('Not allowed to approve this account'); // sem permissão
  }

  if (account.status) {
    throw new Error('Account already approved'); // ja foi aprovado
  }

  account.status = status;

  await account.save();
}

module.exports = { approveAccountService };