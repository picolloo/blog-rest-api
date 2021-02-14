import bcrypt from 'bcryptjs';

import UserRepository from '../repositories';

async function execute(name, email, password) {
  if (!emailIsValid(email)) {
    throw { statusCode: 400, message: 'Invalid email' };
  }

  const userExists = await UserRepository.findByEmail(email);

  if (userExists) {
    throw { statusCode: 400, message: 'Email already in use' };
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const user = await UserRepository.create(name, email, hashedPassword);

  return user;
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  execute,
};
