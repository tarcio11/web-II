const { Account } = require ('../../entities/account')

const deleteAccountService = async ({ accountId }) => {
  const account = await Account.findOne ({ where: { id: accountId } })

  if (!account) {
    throw new Error ('Account not found')
  }

  await account.destroy()
}

module.exports = { deleteAccountService }