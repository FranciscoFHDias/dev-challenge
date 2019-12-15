import { AuthenticationError } from 'apollo-server'

export default {

  Query: {

    products: async (parent, args, { models: { productModel }}) => {
      const products = await productModel.find().exec()
      return products
    }
  },

  Mutation: {

    createProduct: async (parent, { name, supplier, price }, { models: { productModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not loged-in!')
      }
      const product = await productModel.create({ name, supplier, price, user: me.id })
      return product
    },

    deleteProduct: async function(parent, { id }, { models: { productModel }, me }) {
      if(!me) {
        throw new AuthenticationError('You are not loged-in!')
      }
      const deleteProduct = await productModel.findByIdAndRemove({ _id: id })
      return { id: deleteProduct.id, product: deleteProduct.name }
    }
  },

  Product: {

    user: async ({user}, args, { models: { userModel }}) => {
      const author = await userModel.findById({ _id: user }).exec()
      return author
    }
  }
}