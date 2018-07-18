const { getUserId } = require('../utils')

const Query = {
  ideas(parent, args, ctx, info) {
    const id = getUserId(ctx);
    const where = {
      creator: {
        id
      }
    };

    return ctx.db.query.ideas({ where }, info);
  },

  publicIdeas(parent, args, ctx, info) {
    return ctx.db.query.ideas(
      { where: {
        public: true
      }},
      info
    );
  },

  idea(parent, { id }, ctx, info) {
    return ctx.db.query.idea({ where: { id } }, info);
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info);
  },
}

module.exports = { Query }
