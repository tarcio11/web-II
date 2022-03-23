const { Account } = require('../../entities/account');

const showAccountService = async ({ accountId }) => {
  const account = await Account.findOne({ where: { id: accountId } });

  if (!account) {
    throw new Error('Account not found');
  }

  return account
}

module.exports = { showAccountService };