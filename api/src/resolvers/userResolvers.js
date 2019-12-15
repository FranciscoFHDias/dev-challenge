import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'
import { secret } from '../config/enviroment'

export default {

  Query: {

    user: async (parent, id, { models: { userModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not loged-in')
      }
      const user = await userModel.findById({ _id: me.id }).exec()
      return user
    },

    login: async (parent, { username, password }, { models: { userModel } }) => {
      const user = await userModel.findOne({ username }).exec()

      if (!user) {
        throw new AuthenticationError('Invalid credentials')
      }

      const matchPasswords = bcrypt.compareSync(password, user.password)

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials')
      }

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: 24 * 10 * 50 })

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

    products: async ({ id }, args, { models: { productModel } }) => {
      const products = await productModel.find({ user: id }).exec()
      return products
    }
  }
}