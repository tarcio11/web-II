const { User } = require('../../entities/user');

const deleteUserService = async ({ userId }) => {
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error('User not found');
  }

  await user.destroy();
}

module.exports = { deleteUserService };