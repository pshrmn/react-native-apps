const { getUserId } = require('../utils')

const Query = {
  ideas(parent, args, ctx, info) {
    const id = getUserId(ctx)
    const where = {
      author: {
        id
      }
    }

    return ctx.db.query.ideas({ where }, info)
  },

  idea(parent, { id }, ctx, info) {
    return ctx.db.query.idea({ where: { id } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }