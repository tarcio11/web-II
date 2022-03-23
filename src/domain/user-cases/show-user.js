const { User } = require('../entities/user');

const showUserService = async ({ userId }) => {
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error('User not found');
  }

  return user
}

module.exports = { showUserService };