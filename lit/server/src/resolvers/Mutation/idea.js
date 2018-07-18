const { getUserId, invalidType } = require('../../utils')

const idea = {
  async createIdea(parent, { name, description, type, public = false }, ctx, info) {
    if (invalidType(type)) {
      return {
        error: `Invalid idea type: ${type}.`
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
          name
          description
          type
          public
        }`
      );
      return { idea };
    } catch (error) {
      return {
        error
      }
    }
  },

  async updateIdea(parent, { id, name, description, type, public }, ctx, info) {
    if (invalidType(type)) {
      return {
        error: `Invalid idea type: ${type}.`
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
      const userId = getUserId(ctx);
      const currentIdea = await ctx.db.query.idea(
        { where: { id } },
        `{
          creator {
            id
          } 
        }`
      );
      if (currentIdea.creator.id !== userId) {
        return {
          error: `Cannot edit an idea you did not create.`
        };
      }

      const updatedIdea = await ctx.db.mutation.updateIdea(
        {
          data: {
            name,
            description,
            type,
            public
          },
          where: { id }
        },
        `{
          id
          name
          description
          type
          public
        }`
      );
      return { idea: updatedIdea };
    } catch (error) {
      return {
        error
      };
    }
  },

  async deleteIdea(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const ideaExists = await ctx.db.exists.Idea({
      id,
      creator: { id: userId },
    })
    if (!ideaExists) {
      return {
        error: `Idea not found or you're not the creator`
      };
    }

    try {
      const idea = await ctx.db.mutation.deleteIdea(
        { where: { id } },
        `{
          id
        }`
      );
      return {
        idea
      }
    } catch(error) {
      return { error };
    }
  },
}

module.exports = { idea }
