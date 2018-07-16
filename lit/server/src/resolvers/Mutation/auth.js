const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const auth = {
  async signup(parent, { password, ...rest }, ctx, info) {
    console.log('[signup]', info);
    try {
      const user = await ctx.db.mutation.createUser({
        data: {
          ...rest,
          password: await bcrypt.hash(password, 10)
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
        error: "Invalid email or password."
      };
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return {
        error: "Invalid email or password."
      };
    }

    return {
      payload: {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      }
    };
  },
}

module.exports = { auth }
