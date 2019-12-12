import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

export default {

  Query: {

    user: async (parent, { id }, { models: { userModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not loged-in')
      }
      const user = await userModel.findById({ _id: id }).exec()
      return user
    },

    login: async (parent, { name, password }, { models: { userModel } }) => {
      const user = await userModel.findOne({ name }).exec()

      if (!user) {
        throw new AuthenticationError('Invalid credentials')
      }

      const matchPasswords = bcrypt.compareSync(password, user.password)

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials')
      }

      const token = jwt.sign({ id: user.id }, 'riddlemethis', { expiresIn: 24 * 10 * 50 })

      return {
        token
      }
    }
  },

  Mutation: {

    createUser: async (parent, { username, email, password }, { models: { userModel } }) => {
      const user = await userModel.create({ username, email, password })
      return user
    }
  },

  User: {

    products: async ({ id }, args, { models: { userModel } }) => {
      const products = await userModel.find({ author: id }).exec()
      return products
    }
  }
}