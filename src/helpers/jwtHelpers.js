import jwt from 'jsonwebtoken';

export const encode = payload => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: '365d',
  });
  return token;
};

export const decode = async token => {
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
