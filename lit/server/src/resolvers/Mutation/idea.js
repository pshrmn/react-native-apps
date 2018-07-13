const { getUserId } = require('../../utils')

const IDEA_TYPES_ENUM = ["CHARACTER", "WORLD"];

const idea = {
  async createIdea(parent, { name, description, type, public = false }, ctx, info) {
    if (IDEA_TYPES_ENUM.indexOf(ype) === -1) {
      throw new Error(`Invalid idea type: ${type}. Must be one of ${IDEA_TYPES_ENUM}`)
    }

    const userId = getUserId(ctx)
    return ctx.db.mutation.createIdea(
      {
        data: {
          name,
          description,
          public,
          type,
          creator: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async togglePublic(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const idea = await ctx.db.query.idea({
      id,
      creator: { id: userId },
    })
    if (!idea) {
      throw new Error(`Idea not found or you're not the creator`)
    }

    return ctx.db.mutation.updateIdea(
      {
        where: { id },
        data: { public: !idea.public },
      },
      info,
    )
  },

  async deleteIdea(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const ideaExists = await ctx.db.exists.Idea({
      id,
      creator: { id: userId },
    })
    if (!ideaExists) {
      throw new Error(`Idea not found or you're not the creator`)
    }

    return ctx.db.mutation.deleteIdea({ where: { id } })
  },
}

module.exports = { idea }
