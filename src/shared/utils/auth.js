import { verify } from 'jsonwebtoken';

import { JWT_SECRET } from '../../config';

function isAuthenticated(request) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return false;
  }

  const [, token] = authHeader.split(' ');

  try {
    verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export default {
  isAuthenticated,
};
