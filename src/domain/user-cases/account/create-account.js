const { Account } = require ('../../entities/account')

const createAccountService = async ({ agency_id, user_id, rg_client, cpf_client }) => {
  const accountExists = await Account.findOne ({ where: { cpf_client } })

  if (accountExists) {
    throw new Error ('Account already exists')
  }

  await Account.create({ agency_id, user_id, rg_client, cpf_client })
}

module.exports = { createAccountService }