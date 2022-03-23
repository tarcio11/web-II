const { User } = require('../../entities/user');

const updateUserService = async ({ userId, name, email, password, address }) => {
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error('User not found');
  }

  let checkEmailExists
  if (email) {
    checkEmailExists = await User.findOne({ where: { email } });
  }

  if (checkEmailExists && checkEmailExists.id !== userId) {
    throw new Error('Email already exists');
  }

  user.name = name || user.name;
  user.email = email || user.email;
  user.password = password || user.password;
  user.address = address || user.address;

  await user.save();
}

module.exports = { updateUserService };