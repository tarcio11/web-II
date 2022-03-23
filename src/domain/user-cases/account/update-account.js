const { Account } = require('../../entities/account');

const updateAccountService = async ({ accountId, balance, agency_id, number }) => {
  const account = await Account.findOne({ where: { id: accountId } });

  if (!account) {
    throw new Error('Account not found');
  }

  account.balance = balance || account.balance;
  account.agency_id = agency_id || account.agency_id;
  account.number = number || account.number;

  await account.save();
}

module.exports = { updateAccountService };