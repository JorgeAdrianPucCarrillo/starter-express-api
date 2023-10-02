import { logger } from '../helpers/loggerHelpers';
import { decode } from '../helpers/jwtHelpers';
import { User } from '../models/user';

export const getAuthorize = async (req, res, next) => {
  // Check header or url parameters or post parameters for token
  const headerAuthorize =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.headers.authorization;

  // Check exist token
  if (!headerAuthorize) {
    logger.warn('Header Authorize Not Found');
    return res.status(401).json({
      success: false,
      error: {
        status: 401,
        message: 'Error',
        description: 'Token no válido',
      },
    });
  }
  // Get token
  const token = headerAuthorize.replace(process.env.JWT_TOKEN_TYPE, '').trim();

  // Decode token
  // Verifies secret and checks exp
  try {
    const decoded = await decode(token, process.env.JWT_SECRET);
    // Save decoded to request
    req.decoded = decoded;
    // Save user current to request
    const { email } = decoded.payload;
    req.userCurrent = await User.findOne({ email });
    return next();
  } catch (err) {
    logger.error(`Token Decode Error ${err}`);
    return res.status(401).json({
      success: false,
      error: {
        status: 401,
        message: 'Token Decode Error',
        description: err.message,
      },
    });
  }
};
