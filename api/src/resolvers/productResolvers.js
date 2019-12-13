import { AuthenticationError } from 'apollo-server'

export default {

  Query: {

    product: async (parent, { id }, { models: { productModel }, me }) => {
      if(!me) {
        throw new AuthenticationError('You are not loged-in!')
      }
      const product = await productModel.findById({ _id: id }).exec()
      return product
    },

    products: async (parent, args, { models: { productModel }, me}) => {
      if(!me) {
        throw new AuthenticationError('You are not loged-in')
      }
      const products = await productModel.find({ user: me.id }).exec()
      return products
    }
  },

  Mutation: {

    createProduct: async (parent, { name, supplier, price }, { models: { productModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated')
      }
      const product = await productModel.create({ name, supplier, price, user: me.id })
      return product
    }
  },

  Product: {

    user: async ({user}, args, { models: { userModel }}) => {
      const author = await userModel.findById({ _id: user }).exec()
      return author
    }
  }
}