const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { idea } = require('./Mutation/idea');
const { AuthPayload } = require('./AuthPayload');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...idea,
  },
  AuthPayload,
};
