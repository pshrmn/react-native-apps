const jwt = require('jsonwebtoken')
const { getUserId, hashPassword, checkPassword } = require('../../utils');

const auth = {
  async signup(parent, { password, ...rest }, ctx, info) {
    try {
      const user = await ctx.db.mutation.createUser({
        data: {
          ...rest,
          password: await hashPassword(password)
        },
      });
      return {
        payload: {
          token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
          user
        }
      };
    } catch (err) {
      return {
        error: "A user with the provided email already exists."
      }
    }
  },

  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      return {
        error: "Invalid email."
      };
    }

    const valid = await checkPassword(password, user.password);
    if (!valid) {
      return {
        error: "Invalid password."
      };
    }

    return {
      payload: {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      }
    };
  },

  async changePassword(parent, { oldPassword, newPassword }, ctx, info) {
    const userId = getUserId(ctx);
    const user = await ctx.db.query.user({ where: { id: userId } })
    if (!user) {
      return { success: false };
    }

    const valid = await checkPassword(oldPassword, user.password);
    if (!valid) {
      return { success: false };
    }

    try {
      const updatedUser = await ctx.db.mutation.updateUser({
        where: {
          id: userId
        },
        data: {
          password: await hashPassword(newPassword)
        }
      });
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  },
}

module.exports = { auth }
