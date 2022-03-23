const { Account } = require('../../entities/account');

const showStatusAccountUserService = async ({ number, userId }) => {
  const account = await Account.findOne({ where: { user_id: userId } });

  if (!account) {
    throw new Error('Account not found');
  }

  if (account.number !== number) {
    throw new Error('Account number invalid');
  }

  return account
}

module.exports = { showStatusAccountUserService };