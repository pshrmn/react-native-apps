const { getUserId } = require('../../utils')

const IDEA_TYPES_ENUM = ["CHARACTER", "WORLD"];

const idea = {
  async createIdea(parent, { name, description, type, public = false }, ctx, info) {
    if (IDEA_TYPES_ENUM.indexOf(type) === -1) {
      return {
        error: `Invalid idea type: ${type}. Must be one of ${IDEA_TYPES_ENUM}`
      };
    }

    if (name === "") {
      return {
        error: `Name cannot be empty`
      };
    }

    if (description === "") {
      return {
        error: `Description cannot be empty`
      };
    }

    try {
      const userId = getUserId(ctx)
      const idea = await ctx.db.mutation.createIdea(
        {
          data: {
            name,
            description,
            type,
            public,
            creator: {
              connect: { id: userId },
            },
          },
        },
        `{
          id
        }`
      );
      return { idea };
    } catch (error) {
      return {
        error
      }
    }
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
      }
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
