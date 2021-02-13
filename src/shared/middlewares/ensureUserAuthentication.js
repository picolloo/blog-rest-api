import { verify } from 'jsonwebtoken';

import { JWT_SECRET } from '../../config';
export default function ensureUserAuthentication(request, response, next) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw { statusCode: 403, message: 'JWT token is missing' };
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, JWT_SECRET);

    const { sub } = decodedToken;

    request.user = {
      id: sub,
    };

    next();
  } catch (error) {
    throw { statusCode: 400, message: 'Invalid JWT token.' };
  }
}
