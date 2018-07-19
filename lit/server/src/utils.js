const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const { IDEA_TYPES_ENUM } = require("./constants");

function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
}

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

function checkPassword(provided, known) {
  return bcrypt.compare(provided, known);
}

function invalidType(type) {
  return IDEA_TYPES_ENUM.indexOf(type) === -1;
}

module.exports = {
  getUserId,
  AuthError,
  invalidType,
  hashPassword,
  checkPassword
};
