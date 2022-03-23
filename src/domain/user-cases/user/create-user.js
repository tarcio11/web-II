const { User } = require ('../../entities/user')

const createUserService = async ({ name, email, password, cpf, address }) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password, cpf, address, agency_id: 1 })
  return user
}

module.exports = { createUserService }