const { Cards } = require ('../../entities/cards')
const { User } = require ('../../entities/user')
const { Account } = require ('../../entities/account')

const createCardService = async ({ user_id, account_id, type }) => {
  const account = await Account.findOne ({ where: { id: account_id } })

  if (!account) {
    throw new Error ('Account not found')
  }

  const userExists = await User.findOne ({ where: { id: user_id } })

  if (!userExists || account.user_id !== Number(user_id)) {
    throw new Error ('User not found')
  }

  if (!['credit', 'debit'].includes(type)) {
    throw new Error ('Invalid type')
  }

  await Cards.create({ user_id: Number(user_id), account_id: Number(account_id), type })
}

module.exports = { createCardService }